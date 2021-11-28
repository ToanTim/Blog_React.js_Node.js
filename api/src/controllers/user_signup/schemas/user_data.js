const mongoose = require("mongoose");
const Schema=mongoose.Schema;

const reqString={
  type: String,
  required: true,
  unique: true,
  trim: true,
  minLength: 3
}

const user_data = new Schema({
  email: reqString,
  username: reqString,
  password: reqString,
},{
  timestamps:true,
});

module.exports = mongoose.model("user_account",user_data);