'use strict'

//domain name server
//사람이 보는 웹 주소를 컴퓨터가 이해할수 있는 숫자주소로 바뀌는 과정

const dns = require('dns')
dns.lookup('test.com', (err, address, family) => {
  console.log(`adress: ${address}, ${family}`)
  //IpV4 <- family의 숫자 내용
})

dns.resolve4('archive.org', (err, addresses) => {
  if (err) throw err

  const res = JSON.stringify(addresses)
  console.log(res)

  addresses.forEach(a => {
    dns.reverse(a, (err, hostnames) => {
      if (err) throw err

      console.log(`revers for ${a}: ${JSON.stringify(hostnames)}`)
    })
  })
})