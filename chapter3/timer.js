'use strict'

const timeoutObj = setTimeout(() => {
  console.log('first')
}, 0)

const immediateObj = setImmediate(() => {
  console.log('second')
})

const intervalObj = setInterval(() => {
  console.log('third')
}, 1000)

clearTimeout(timeoutObj)
clearImmediate(immediateObj)
clearInterval(intervalObj)