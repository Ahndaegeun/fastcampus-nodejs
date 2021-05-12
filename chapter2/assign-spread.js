'use strict'

const obj = {
  title: 'node.js all in one packige'
}

const newObj = {
  name : 'fastcampus'
}

//const ret = Object.assign({}, obj, newObj)
const ret = {
  ...obj,
  ...newObj
}
console.log(ret)



const arr = [1, 2, 3]
const newArr = [4, 5, 6]
const res = [
  ...arr,
  ...newArr
]
console.log(res)