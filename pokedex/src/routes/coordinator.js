export const goToHome = (history) => {
    history.push('/')
}

export const goToPokedex = (history) => {
    history.push('/pokedex')
}

export const goToPokeDetail = (history) => {
    history.push('/pokedetail')
}

export const goToLastPage = (history) => {
    history.goBack()
}