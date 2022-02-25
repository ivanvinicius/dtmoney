import { useEffect, useState } from 'react'
import { api } from '../../services/api'

import { Container } from './styles'

interface ITransactionsData {
  id: number
  title: string
  price: number
  type: 'income' | 'outcome'
  category: string
  createAt: string
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Array<ITransactionsData>>([])

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(
            ({ id, title, type, price, category, createAt }) => (
              <tr key={id}>
                <td>{title}</td>
                <td className={type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(price)}
                </td>
                <td>{category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(new Date(createAt))}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </Container>
  )
}
