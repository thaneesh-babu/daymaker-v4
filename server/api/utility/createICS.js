const ics = require("ics");
const fs = require("fs");
const { promisify } = require("util");

const createEventPromise = promisify(ics.createEvents).bind(ics);

const createICSFile = (event) => {
    return createEventPromise(event)
        .then((value) =>
            fs.promises.writeFile("./api/utility/icsFiles/event.ics", value)
        )
        .catch((error) => {
            throw new Error(JSON.stringify(error));
        });
};

module.exports = createICSFile;
