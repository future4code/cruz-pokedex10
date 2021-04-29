export const goToHome = (history) => {
    history.push('/')
}

export const goToPokedex = (history) => {
    history.push('/pokedex')
}

export const goToPokeDetail = (history, name) => {
    history.push(`/pokedetail/${name}`)
}

export const goToLastPage = (history) => {
    history.goBack()
}