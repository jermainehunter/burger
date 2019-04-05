// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
    all: function (cb) {
        orm.all("burgers", (res) => {
            console.log(cb)
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, (res) => {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, (res) => {
            cb(res);
        });
    },

    delete: function (id, cb){
        console.log(id);
        orm.delete(id, function(data){
            cb(data);
        })
    }

};
// burger.all((data) => {
//   console.log(data);
// });

// Export the database functions for the controller (catsController.js).
module.exports = burger;
