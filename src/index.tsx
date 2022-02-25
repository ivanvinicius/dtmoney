import React from 'react'
import ReactDOM from 'react-dom'
import { createServer, Model } from 'miragejs'

import { App } from './App'

createServer({
  models: {
    transactions: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: '1',
          title: 'Desenvolvimento de site',
          price: 12000,
          type: 'income',
          category: 'Dev',
          createdAt: new Date()
        },
        {
          id: '2',
          title: 'Hamburguer',
          price: 59,
          type: 'outcome',
          category: 'Alimentação',
          createdAt: new Date()
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      return schema.create('transactions', JSON.parse(request.requestBody))
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
