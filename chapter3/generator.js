'use strict'

const { get } = require("http")

// yield 데이터를 반환하지만 함수를 종료하지는 않음 / arrowfunction X
// return 해당 함수를 종료
{
function* log () {
  console.log(0, yield)
  console.log(1, yield)
  console.log(2, yield)
}

const gen = log()

gen.next()
gen.next('zero')
gen.next('first')
gen.next('second')
}

const obj = {
  *gen() {
    let cnt = 0;
    yield ++cnt;
    yield ++cnt;
    yield ++cnt;
  }
}

const g = obj.gen()
console.log(g.next())
console.log(g.next())
console.log(g.next())