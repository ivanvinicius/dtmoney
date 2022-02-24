import Modal from 'react-modal'

import { Container } from './styles'

interface INewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: INewTransactionModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container>
        <h1>Cadastrar transação</h1>

        <input name="title" placeholder="Título" />
        <input name="ammount" placeholder="Valor" type="number" />
        <input name="category" placeholder="Categoria" />

        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}
