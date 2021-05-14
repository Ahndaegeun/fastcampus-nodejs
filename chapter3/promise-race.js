'use strict'

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(2000), 2000);
})

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('즉시'), 0);
})

const res = Promise.race([promise1, promise2]).then(value => console.log(value))

if(res === undefined) {
  //resolve가 비어있을 경우 undefined가 출력됨 오류가 아님
}