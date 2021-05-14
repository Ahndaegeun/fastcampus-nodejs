'use strict'
//비구조화

const obj = {
  title: 'node.js',
  value: 'all in one package'
}

//~ ES5
// const title = obj.title
// const value = obj.value

//ES6 ~
const {title, value} = obj
console.log(title, value)

const arr = [0, 1, 2]
const [,a,b] = arr
console.log(a,b)