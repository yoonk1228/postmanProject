
const express = require('express')
const app = express()
const router = express.Router()
// 종남

router.get('/login', (req, res) => {
    console.log('로그인')
})
router.post('/login', (req, res) => {
    console.log('로그인 post 확인')
})
router.post('/logout', (req, res) => {
    console.log('로그아웃 post 확인')
})

//user 규리

router.get('/profile', (req, res) => {
    console.log('프로필보기')
})

router.get('/signup', (req, res) => {
    console.log('회원가입')
})

router.post('/signup', (req, res) => {
    console.log('회원가입 완료')
})

router.get('/update', (req, res) => {
    console.log('회원가입 정보 수정')
})

router.post('/update', (req, res) => {
    console.log('회원가입 정보 수정 완료')
})


module.exports = router
