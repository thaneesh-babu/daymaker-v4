import os
from flask import Flask, request, session, jsonify
from flask_cors import CORS, cross_origin

from werkzeug.utils import secure_filename
from nlp.run import run
app = Flask(__name__)
cors = CORS(app)

UPLOAD_FOLDER = 'nlp/inputs'


@app.route('/fileUpload', methods=['POST'])
def upload():
    file = request.files['file']
    print('file: ', file)
    syllabus_module = file.filename[:file.filename.find('.')]
    target = os.path.join(
        UPLOAD_FOLDER, syllabus_module)
    if not os.path.isdir(target):
        os.makedirs(target)
    filename = secure_filename(file.filename)
    destination = "/".join([target, filename])
    print('destination: ', destination)
    file.save(destination)
    session['uploadFilePath'] = destination
    events = run(file.filename, syllabus_module)
    return jsonify(events)


if __name__ == '__main__':
    app.secret_key = 'super secret key ;)'
    app.config['SESSION_TYPE'] = 'filesystem'

    app.run(port=7000)
