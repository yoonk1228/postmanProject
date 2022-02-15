
const express = require('express')
const app = express()
const router = express.Router()

//user 규리


router.get('/profile',(req,res)=>{
    console.log('프로필보기')
})

router.get('/signup',(req,res)=>{
    console.log('회원가입')
})

router.post('/signup',(req,res)=>{
    console.log('회원가입 완료')
})

router.get('/update',(req,res)=>{
    console.log('회원가입 정보 수정')
})

router.post('/update',(req,res)=>{
    console.log('회원가입 정보 수정 완료')
})


module.exports = router