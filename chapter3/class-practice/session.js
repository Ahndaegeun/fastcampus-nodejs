'use strict'

const cacheManager = require('./cache')

class sessionManager extends cacheManager{}

const SessionManager = new sessionManager()
SessionManager.addConfig({
  token: 'random'
})

const config = SessionManager.getConfig();
console.log(config)