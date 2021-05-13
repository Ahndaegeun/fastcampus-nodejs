'use strict'
//Curried Function
//Closure

const getDiscount = rate => price => rate * price
const getTenpercentOff = getDiscount(0.1)

getTenpercentOff(10000)

//합성함수
//f(x) = x + 1
//g(x) = x^2
//h(x) = f(g(x))