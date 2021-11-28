const express = require('express')
const router = express.Router();
const userSchemas = require("./schemas/user_data")

router.route('/').get((req,res)=>{
  userSchemas.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error '+err));
});

router.route('/create_user').post((req,res)=>{
  const email    =req.body.email;
  const username =req.body.username;
  const password =req.body.password;

  const newUser = new userSchemas({
    email,
    username,
    password,
  })

  newUser.save()
    .then(() => res.json('user added!'))
    .catch(err => res.status(400).json('Error '+err));
});

module.exports = router;