const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
  console.log("'/로 get 요청'")
})

// 이걸 안적으면, 어디에서도 이 index.js를 불러오지못해요.
module.exports = router