import glob
import os
from PIL import Image
from dotenv import load_dotenv
from nlp.main import model
import pytesseract

load_dotenv()
pytesseract.pytesseract.tesseract_cmd = os.getenv('TESSERACT-PATH')

events = []


def ocr(syllabus_module):
    images = glob.glob("nlp/inputs/" + syllabus_module + "/*.jpg")
    for image in images:
        img = Image.open(image)
        data = str(pytesseract.image_to_string(
            img, lang='eng', config='--psm 6'))
        for sentence in data.split('\n'):
            model(sentence, events)
    return events
