from parsepdf import syllabus_module
import glob
import os
from PIL import Image
from dotenv import load_dotenv
from main import model
import pytesseract

load_dotenv()
pytesseract.pytesseract.tesseract_cmd = os.getenv('TESSERACT-PATH')

events = []
images = glob.glob("inputs/" + syllabus_module + "/*.jpg")


def ocr():
    for image in images:
        img = Image.open(image)
        data = str(pytesseract.image_to_string(
            img, lang='eng', config='--psm 6'))
        for sentence in data.split('\n'):
            model(sentence, events)

    print(events)
    return events
