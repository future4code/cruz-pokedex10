import { useHistory } from 'react-router-dom'
import { goToLastPage, goToPokedex } from '../../routes/coordinator'

import { Container, ContainerButton } from './styled'
import Header from '../../components/Header/Header'
import { Button } from '../../constants/buttons'
import Details from '../../components/Details/Details'

const PokeDetail = () => {
    const history = useHistory()

    return (
        <Container>
            <Header/>
            <ContainerButton>
                <Button onClick={() => goToLastPage(history)}>Voltar</Button>
                <Button onClick={ () => goToPokedex(history) }>Pokedex</Button>
            </ContainerButton>
            <Details/>
        </Container>
    )
}

export default PokeDetail