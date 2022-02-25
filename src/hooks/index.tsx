import { TransactionProvider } from './Transaction'

interface IAppProviderProps {
  children: React.ReactNode
}

export function AppProvider({ children }: IAppProviderProps) {
  return <TransactionProvider>{children}</TransactionProvider>
}
