from nlp.parsepdf import parse
from nlp.ocr import ocr


def run(filename, syllabus_module):
    parse(filename, syllabus_module)
    events = ocr(syllabus_module)
    return events
