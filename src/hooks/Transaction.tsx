import { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../services/api'

interface ITransactionProviderProps {
  children: React.ReactNode
}

export interface ITransactionsData {
  id: string
  title: string
  price: number
  type: 'income' | 'outcome' | string
  category: string
  createdAt: string
}

type ICreateTransactionData = Omit<ITransactionsData, 'id'>

interface ITransactionContext {
  transactions: ITransactionsData[]
  createTransaction: (transaction: ICreateTransactionData) => Promise<void>
}

const TransactionContext = createContext<ITransactionContext>(
  {} as ITransactionContext
)

function TransactionProvider({ children }: ITransactionProviderProps) {
  const [transactions, setTransactions] = useState<ITransactionsData[]>([])

  async function createTransaction(transaction: ICreateTransactionData) {
    const response = await api.post('/transactions', transaction)

    setTransactions([...transactions, response.data.transactions])
  }

  useEffect(() => {
    api
      .get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}

function useTransaction() {
  const context = useContext(TransactionContext)

  if (!context) {
    throw new Error('Transaction context must be wrapped by your own provider!')
  }

  return context
}

export { TransactionProvider, useTransaction }
