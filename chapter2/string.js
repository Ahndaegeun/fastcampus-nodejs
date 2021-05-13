'use strict'

let string = 'node.js all in one package'

let isStartWith = string.startsWith('n')
let isIncludes = string.includes('all in one')
let isEndWith = string.endsWith('e')

const checkIfContains = () => {
  if(isEndWith && isIncludes && isStartWith) {
    return true
  }
}

const ret = checkIfContains()

console.log(ret)