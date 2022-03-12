const mongoose = require('mongoose');

const Post = require('./models/Post.js')
mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db');

// Post.create({
//     title:'İkinci  post başlığım',
//     content:'İkinci post içeriği, lorem ipsum text'
// },(error,post)=>{
// console.log(error,post)
// })

// Post.find({
//     title:'İkinci  post başlığım',
// },(error,post)=>{
//     console.log(error,post);
// })

// Post.findByIdAndUpdate('621d0cac4731254031d6a3b0',{
//     title:'Birinci post title'
// },(error,post)=>{
//     console.log(error,post)
// })
Post.findByIdAndDelete('621d0cac4731254031d6a3b0',(error,post)=>{
    console.log(error,post)
})