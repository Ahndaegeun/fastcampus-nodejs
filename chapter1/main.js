'use strict'
{
//Que FIFO
const queue = []
queue.push(1)
queue.push(2)
console.log(queue)
const r = queue.shift()
console.log(r)

//Stack LIFO
const stack = []
stack.push(1)
stack.push(2)
console.log(stack)
var s = stack.pop()
console.log(s)
}

