
export async function getBibleText(quote: string) {
    const url = `https://bible-api.com/${quote}?translation=almeida`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

