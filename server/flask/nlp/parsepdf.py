from pdf2image import convert_from_path


def parse(filename, syllabus_module):
    pdf = r"nlp/inputs/" + syllabus_module + "/" + filename
    pages = convert_from_path(pdf, 350)

    for i, page in enumerate(pages):
        image_name = "nlp/inputs/" + syllabus_module + \
            "/" + "Page_" + str(i+1) + ".jpg"
        page.save(image_name, "JPEG")
