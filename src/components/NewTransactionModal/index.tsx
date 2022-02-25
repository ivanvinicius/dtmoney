import { useState } from 'react'
import Modal from 'react-modal'

import closeSVG from '../../assets/close.svg'
import incomeSVG from '../../assets/income.svg'
import outcomeSVG from '../../assets/outcome.svg'

import { Container, TransactionTypeContainer, RadioType } from './styles'

interface INewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: INewTransactionModalProps) {
  const [type, setType] = useState('')

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeSVG} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar transação</h2>

        <input name="title" placeholder="Título" />
        <input name="price" placeholder="Preço" type="number" />

        <TransactionTypeContainer>
          <RadioType
            type="button"
            onClick={() => setType('income')}
            isActive={type === 'income'}
            activeColor="green"
          >
            <img src={incomeSVG} alt="Entrada" />
            <span>Entrada</span>
          </RadioType>

          <RadioType
            type="button"
            onClick={() => setType('outcome')}
            isActive={type === 'outcome'}
            activeColor="red"
          >
            <img src={outcomeSVG} alt="Saída" />
            <span>Saída</span>
          </RadioType>
        </TransactionTypeContainer>

        <input name="category" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
