from pdf2image import convert_from_path

syllabus_module = "syllabus-1"
syllabus_to_be_parsed = "syllabus_fa21.pdf"
pdf = r"inputs/" + syllabus_module + "/" + syllabus_to_be_parsed
pages = convert_from_path(pdf, 350)

for i, page in enumerate(pages):
    image_name = "inputs/" + syllabus_module + "/Page_" + str(i+1) + ".jpg"
    page.save(image_name, "JPEG")
