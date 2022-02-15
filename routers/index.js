const express = require('express')
const router = express.Router()
//김도움
const boardRouter = require('./board')
const userRouter = require('./user')

router.get('/',(req,res)=>{
  console.log("'/로 get 요청'")
})

//김도움
router.use('/board',boardRouter)

//
router.use('/user',userRouter)
// 이걸 안적으면, 어디에서도 이 index.js를 불러오지못해요.

module.exports = router