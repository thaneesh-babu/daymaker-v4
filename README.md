# daymaker-v4

## Development Guide

### Getting Started

1. Copy over the `.env.example` file and rename it to `.env` in the server folder.
2. Add yourself as a user in the shared MongoDB Atlas database.
3. Populate the `MONGODB_URL` field with the connection URL to your local instance.
4. To run the client and servers, run `./start.sh`

#### To run client:

-   `cd client` (Navigate to client folder)
-   `npm i` (Make sure you have dependencies installed)
-   `npm start` (Run the client)
-   Navigate to `localhost:3000` to view the application

#### To run express server:

-   `cd server/express` (Navigate to server folder)
-   `npm i` (Make sure you have dependencies installed)
-   `npm start` (Run the server)

#### To run flask server:

-   `cd server/flask` (Navigate to server folder)
-   `pip install -r requirements.txt` (Make sure you have dependencies installed)
-   `python3 app.py` (Run the server)

## Server Breakdown

### NLP

-   Install tesseract-ocr, refer [this](https://github.com/tesseract-ocr/tesseract) for installation.
-   Copy over the `.env.example` file and rename it to `.env` and fill out the path to your tesseract installation.
-   Train the model by running `python train/main.py`.

## Archive

a) [DayMaker v3](https://github.com/nmhossain02/daymaker-v3) <br>
b) DayMaker v2 (not there rip) <br>
c) [DayMaker v1](https://github.com/tawsifkamal/dayMaker) <br>
