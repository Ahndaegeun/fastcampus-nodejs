'use strict'

const fs =require('fs')
const { promisify } = require('util')

const read = promisify(fs.readFile)
const write = promisify(fs.writeFile)

const writeAndRead = async (data = '') => {
  try {
    await write('test.txt', data)
    return (await read('test.txt'))
  } catch (e) {
    console.log(e)
  }
}

writeAndRead('something to write')


// ~ ES5
// fs.readFile('test.txt', 'utf-8', (err, data) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log(data)
// })

// const content = 'something to write'
// fs.writeFile('fast.txt', content, err => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('success')
// })