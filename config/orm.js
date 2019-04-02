// Import MySQL connection.
const connection = require("../config/connection.js");
//////// STARTER CODE -- NO TOUCHY ///////
//////// STARTER CODE -- NO TOUCHY ///////
//////// STARTER CODE -- NO TOUCHY ///////
function printQuestionMarks(num) {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    const arr = [];

    for (let key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}
//////// STARTER CODE -- NO TOUCHY ///////
//////// STARTER CODE -- NO TOUCHY ///////
//////// STARTER CODE -- NO TOUCHY ///////


// Object for all our SQL statement functions.
// selectAll() of our burgers
const orm = {
    all: function (tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    //insertOne() a new burger
    create: function (table, cols, vals, cb) {
        let queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
    //updateOne() update a burger
    update: function (table, objColVals, condition, cb) {
        let queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },


};

// Export the orm object for the model (cat.js).
module.exports = orm;
