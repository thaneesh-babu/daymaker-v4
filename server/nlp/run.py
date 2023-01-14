import sys
from parsepdf import parse
from ocr import ocr

filename = sys.argv[1]
parse(filename)
events = ocr()
print(events)
