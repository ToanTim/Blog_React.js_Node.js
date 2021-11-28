const express = require('express')
const router = express.Router();
const postSchemas = require("./schemas/user_post")

router.route('/').get((req,res)=>{
  postSchemas.find()
    .then(post => res.json(post))
    .catch(err => res.status(400).json('Error '+err));
});

router.route('/newpost').post((req,res)=>{
  const username =req.body.username;
  const content =req.body.content;
  const header=req.body.header;
  const description =req.body.description;
  const date=Date.parse(req.body.date);

  const newPost = new postSchemas({
    username,
    content,
    header,
    description,
    date,
  })

  newPost.save()
    .then(() => res.json('post added!'))
    .catch(err => res.status(400).json('Error '+err));
});

router.route('/:id').get((req,res)=>{
  postSchemas.findById(req.params.id)
   .then(post => res.json(post))
   .catch(err => res.status(400).json('Error '+err));
})

router.route('/:id').delete((req,res)=>{
  postSchemas.findByIdAndDelete(req.params.id)
   .then(() => res.json('post deleted!'))
   .catch(err => res.status(400).json('Error '+err));
})
// content,
//     header,
//     description,
//     date,
router.route('/update/:id').post((req,res)=>{
  postSchemas.findById(req.params.id)
   .then(post=>{
     post.username=req.body.username;
     post.content=req.body.content;
     post.header=req.body.header;
     post.description=req.body.description;
     post.date=Date.parse(req.body.date);

     post.save()
      .then(() => res.json('post updated!'))
      .catch(err => res.status(400).json('Error '+err));
      
   })
   .catch(err => res.status(400).json('Error '+err));
})

module.exports = router;