const express = require('express')
const router = express.Router()

//김도움
router.get('board/view',(req,res)=>{
    console.log('글보기 get 확인');
})
router.get('board/update',(req,res)=>{
    console.log('글수정 get 확인');
})
router.post('board/update',(req,res)=>{
    console.log('글수정 post 확인');
})
router.get('board/write',(req,res)=>{
    console.log('글쓰기 get 확인');
})
router.post('board/write',(req,res)=>{
    console.log('글쓰기 post 확인');
})


module.exports = router