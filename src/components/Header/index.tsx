import logoSvg from '../../assets/logo.svg'

import { Container, Content } from './styles'

interface IHeaderProps {
  onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: IHeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="dt money" />

        <button onClick={onOpenNewTransactionModal} type="button">
          Nova transação
        </button>
      </Content>
    </Container>
  )
}
