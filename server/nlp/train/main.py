import spacy
from spacy.util import minibatch, compounding
from spacy.training import Example
import random
from pathlib import Path
from data import TRAIN_DATA

LABEL = "cal_event"

nlp = spacy.load('en_core_web_lg')

# Getting the ner component
ner = nlp.get_pipe('ner')

ner.add_label(LABEL)

optimizer = nlp.resume_training()
move_names = list(ner.move_names)

# List of pipes you want to train
pipe_exceptions = ["ner", "trf_wordpiecer", "trf_tok2vec"]

# List of pipes which should remain unaffected in training
other_pipes = [pipe for pipe in nlp.pipe_names if pipe not in pipe_exceptions]

with nlp.disable_pipes(*other_pipes):

    sizes = compounding(1.0, 4.0, 1.001)
    # Training for n iterations
    n = 100
    for itn in range(n):
        # shuffle examples before training
        random.shuffle(TRAIN_DATA)
        # batch up the examples using spaCy's minibatch
        batches = minibatch(TRAIN_DATA, size=sizes)
        # dictionary to store losses
        losses = {}
        for batch in batches:
            for text, annotations in batch:
                doc = nlp.make_doc(text)
                example = Example.from_dict(doc, annotations)
                nlp.update([example], drop=0.2, sgd=optimizer, losses=losses)

# Testing model

test_text = "There will be an exam 5 and a monthly assessment 3 on Tuesday"
doc = nlp(test_text)

for ent in doc.ents:
    print(ent)

# Saving model

output_dir = Path('../model-0')
if not output_dir.exists():
    output_dir.mkdir()
nlp.to_disk(output_dir)
print("Saved model to", output_dir)
