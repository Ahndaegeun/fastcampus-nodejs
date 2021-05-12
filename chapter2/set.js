'use strict'

//set은 중복되지 않는 자료구조 / has 자료 존재여부 확인

const test = new Set()

test.add(1)
test.add(1)
test.add(2)
test.add(2)
test.add(3)

for(const item of test) {
  console.log(item)
}

const ret = test.has(2)

console.log(ret)