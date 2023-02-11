#!/bin/bash

(cd client && npm run dev) &
(cd server/express && npm start) &
(cd server/flask && python3 app.py)