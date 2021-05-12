'use strict'

const obj = {
  title : 'node js 올인원 패키지'
}

function isEmptyObj () {
  if (obj.title) {
    return true
  } else {
    return false
  }
}

const isEmptyObj = () => obj.title ? true : false

isEmptyObj()