const express = require('express')
const app = express()
// local에 있는 router 불러오기.
const router = require('./routers')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(router)

app.listen(3000, () => {
  console.log('server 시작!')
})