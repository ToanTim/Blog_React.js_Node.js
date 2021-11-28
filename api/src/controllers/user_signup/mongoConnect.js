var mongoose = require('mongoose');
const userSchemas = require("./schemas/user_data")
const postSchemas = require("./schemas/user_post")
const express = require('express')
const app=express();
const router = express.Router();

require('dotenv').config();

// const userRouter=require("./userFunc")
// const postRouter=require("./postFunc");

const url = process.env.DB_CONNECTION_STRING;
mongoose.connect(url,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

const connection=mongoose.connection;
connection.once('open',()=>{
  console.log('MongoDB connected!!')
})

module.exports=router;

