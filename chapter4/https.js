'use strict'

const https = require('https')
const options = {
  hostname : 'google.com',
  port : '443', //port 기본값
  path : '/login',
  method : 'GET' //creat(post) read(get) update(put) delete 4가지가 가능하다.
}
const req = https.request(options, res => {
  console.log(`statusCode : ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(e)
  })

  req.on('error', e => {
    console.log(error)
  })
})

req.end()