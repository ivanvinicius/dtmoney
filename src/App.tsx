import { useState } from 'react'
import Modal from 'react-modal'

import { AppProvider } from './hooks'

import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal'

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionsModalOpen, setIsNewTransactionModalOpen] =
    useState(false)

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(state => !state)
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(state => !state)
  }

  return (
    <AppProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </AppProvider>
  )
}
