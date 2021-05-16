'use strict'

class FullStack {
  constructor(backend, frontend) {
    this.backend = backend
    this.frontend = frontend
  }

  getBackend() {
    return this.backend
  }
  setBackend(backend) {
    this.backend = backend
  }

  getFrontend() {
    return this.frontend
  }
  setFrontend(frontend) {
    this.frontend = frontend
  }
}

const fullstack = new FullStack('javascript', 'javascript')
fullstack.getBackend()
fullstack.getFrontend()