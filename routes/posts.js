const express = require('express')
const router = express.Router()
const Post = require('../models/Post')

router.get('/new',(req,res)=>{
    res.render('site/addPost');
  })
router.get('/:id',(req,res)=>{
    Post.findById(req.params.id).lean().then(post => {
        res.render('site/post', {post:post})
    })
    // console.log(req.params)
    // res.render('site/addPost');
  })
router.post('/test',(req,res)=>{
//   console.log(req.body)
    Post.create(req.body)
    res.redirect('/');
  })

  module.exports = router