import { FormEvent, useState } from 'react'
import Modal from 'react-modal'

import { api } from '../../services/api'
import closeSVG from '../../assets/close.svg'
import incomeSVG from '../../assets/income.svg'
import outcomeSVG from '../../assets/outcome.svg'

import { Form, TransactionTypeContainer, RadioType } from './styles'

interface INewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: INewTransactionModalProps) {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [type, setType] = useState('')
  const [category, setCategory] = useState('')

  async function handleCreateNewTransaction(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = { title, price, type, category }

    const response = await api.post('/transactions', data)

    console.log(response)
  }

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

      <Form onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          name="title"
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="Título"
        />
        <input
          name="price"
          value={price}
          onChange={event => setPrice(Number(event.target.value))}
          placeholder="Preço"
          type="number"
        />

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

        <input
          name="category"
          value={category}
          onChange={event => setCategory(event.target.value)}
          placeholder="Categoria"
        />

        <button type="submit">Cadastrar</button>
      </Form>
    </Modal>
  )
}
