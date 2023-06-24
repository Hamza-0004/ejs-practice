const mongoose = require('mongoose')
const schema = mongoose.Schema;

const PersonSchema = new schema({
    name: String,
    age: Number,
    subjects: [String],
    address:{
        city:String,
        country:String
    }
})

