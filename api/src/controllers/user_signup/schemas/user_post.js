const mongoose = require("mongoose");
const Schema=mongoose.Schema;


const postSchema = new Schema({
  username:{
    type:'string',
    required:true,
  },
  content:{
    type:'string',
    required:true,
  },
  header:{
    type:'string',
    required:true,
  },
  description:{
    type:'string',
    required:true,
  },
  date:{
    type:'Date',
    required:true,
  },
},{
  timestamp:true,
})

module.exports = mongoose.model('content_data',postSchema);