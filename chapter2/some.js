'use strict'

const arr = [1, 2, 0, -1, -2]

const res = arr.some(key => key < 0)
console.log(res)

//every는 조건이 모두 만족해야하지만, some은 조건이 한가지만 만족해도 true를 출력함 