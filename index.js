const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const port = process.env.PORT || 3030
//const exporter = require('./exporter/docx-export')
const helmet = require('helmet')
const router = require('./router')

app.use(helmet())

app.listen(port, () => {
  console.log(`exporter listening at http://localhost:${port}`)
})

app.use('/', router)

module.exports = app
