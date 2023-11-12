const mongoose = require("mongoose");



var MongoURL = 'mongodb+srv://garimaver399:mern12@garima.kb9yx0d.mongodb.net/mern-pizza'

mongoose.connect(MongoURL)

var db = mongoose.connection

db.on(`connected`,()=> {
   console.log(`connected to mongodb`);
})

db.on('error' , () => {
    console.log(`connected failed`);
})

module.exports = mongoose