const apiURL = `https://thronesapi.com/api/v2/Characters`

const container = document.querySelector("#container")

const getCharacters = async () => {
    const res = await fetch(apiURL)
    const data = await res.json()
    return data
}

const renderData = async () => {
    const characters = await getCharacters()
    let template = ""
    //Necesitamos que la card devuelta, tenga: fullName, family, e imageUrl.
    characters.forEach((el) => {
        template += `<p>${el.fullName}</p>`
    })

    container.innerHTML = template

}
renderData()