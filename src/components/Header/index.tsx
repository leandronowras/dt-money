import {Container, Content} from './styles'
import logo from '../../assets/logo.svg'

interface HeaderProps {
    onOpenNewTransactionModal: () => void
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    return (
        <Container>
            <Content>
                <img src={logo} alt="logo"/>
                <button type='button' onClick={onOpenNewTransactionModal}>Nova transacao</button>
            </Content>
           
        </Container>
    )
}