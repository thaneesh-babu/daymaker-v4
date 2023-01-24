from pdf2image import convert_from_path
import os

def parse(filename, syllabus_module):
    pdf = r"nlp/inputs/" + syllabus_module + "/" + filename
    if os.getenv("POPPLER-NOT-IN-PATH").lower() in ('true', '1', 't'):
        pages = convert_from_path(pdf, 350, poppler_path=r"D:\Programs\Poppler\poppler-0.68.0\bin")
    else:
        pages = convert_from_path(pdf, 350)

    for i, page in enumerate(pages):
        image_name = "nlp/inputs/" + syllabus_module + \
            "/" + "Page_" + str(i+1) + ".jpg"
        page.save(image_name, "JPEG")
