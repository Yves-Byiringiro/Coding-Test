const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema ({
    names: {type : String, required : true},
    nid: {type : String, required : true, unique : true},
    phoneNumber: {type : String, required : true},
    gender: {type : String, required : true},
    email: {type : String, required : true},
});

const User = mongoose.model('Users', userSchema); 

module.exports = User;