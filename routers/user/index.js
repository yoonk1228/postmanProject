
const express = require('express')
const router = express.Router()

//user 규리

router.get('user/profile',(req,res)=>{
    console.log('프로필보기')
})

router.get('user/signup',(req,res)=>{
    console.log('회원가입')
})

router.post('user/signup',(req,res)=>{
    console.log('회원가입 완료')
})

router.get('user/update',(req,res)=>{
    console.log('회원가입 정보 수정')
})

router.post('user/update',(req,res)=>{
    console.log('회원가입 정보 수정 완료')
})
