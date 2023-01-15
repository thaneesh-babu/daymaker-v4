import spacy
import json
import string
from pathlib import Path
from dateutil.parser import ParserError, parse
output_dir = Path('nlp/model-0')
nlp = spacy.load(output_dir)


def model(line, events):
    try:
        dateObject = parse(line, fuzzy=True)
        if (str(dateObject)[:4] < '2000' or str(dateObject)[:4] > '2100'):
            return
        extraneousTextTuple = parse(line, fuzzy_with_tokens=True)[1]
        extraneousText = ""
        for s in extraneousTextTuple:
            if s != " ":
                extraneousText += s

        sentence = nlp(extraneousText)

        title = []
        location = []
        description = []

        for X in sentence.ents:
            if X.label_ == "cal_event":
                title.append(X.text)
                extraneousText = extraneousText.replace(X.text, '')

            elif X.label_ == "GPE":
                location.append(X.text)
                extraneousText = extraneousText.replace(X.text, '')

            else:
                description.append(X.text)
                extraneousText = extraneousText.replace(X.text, '')

        if len(title) > 0:
            title = ", ".join(title)
            if len(description) > 0:
                description = ", ".join(description)
            else:
                description = extraneousText
                extraneousText = ""

            if len(location) > 0:
                location = ", ".join(location)
            else:
                location = ""

            extraneousText = extraneousText.translate(
                str.maketrans('', '', string.punctuation))

            # event structure: {
            #   title: string
            #   date: string
            #   timeStart: string
            #   timeEnd: string
            #   location: string
            #   description: string
            # }

            event = {
                "title": title,
                "date": str(dateObject)[:10],
                "timeStart": str(dateObject)[11:],
                "timeEnd": "23:59:59",
                "location": location,
                "description": description
            }
            json_event = json.dumps(event)

            events.append(json_event)

    except ParserError:
        pass
