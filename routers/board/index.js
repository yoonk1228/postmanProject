const express = require('express')
const router = express.Router()

//김도움
router.get('/view',(req,res)=>{
    console.log('글보기 get 확인');
    res.send('hihihi')
})
router.get('/update',(req,res)=>{
    console.log('글수정 get 확인');
})
router.post('/update',(req,res)=>{
    console.log('글수정 post 확인');
})
router.get('/write',(req,res)=>{
    console.log('글쓰기 get 확인');
})
router.post('/write',(req,res)=>{
    console.log('글쓰기 post 확인');
})


module.exports = router