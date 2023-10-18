export async function getBooksByName(name) {
    const query = (name.toString()).replaceAll(' ', '+')
    // const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}${apiKey && '&' + apiKey}`)
    const res = await fetch(`https://openlibrary.org/search.json?q=${query}`)
    const data = await res.json()
    return data
}

export async function getBookById(id) {
    const res = await fetch(`https://openlibrary.org/works/${id}.json`)
    const book = await res.json()
    return book
}

export async function getBookEditions(id) {
    const res = await fetch(`https://openlibrary.org/works/${id}/editions.json`)
    const editions = await res.json()
    return editions
}

export async function getBookShelves(id) {
    const res = await fetch(`https://openlibrary.org/works/${id}/bookshelves.json`)
    const shelves = await res.json()
    return shelves
}

export async function getBookRatings(id) {
    const res = await fetch(`https://openlibrary.org/works/${id}/ratings.json`)
    const ratings = await res.json()
    return ratings
}

export async function getBooksBySubject(subject) {
    const res = await fetch(`https://openlibrary.org/subjects/${subject}.json?details=true`)
    const books = await res.json()
    return books
}

export async function getAuthors(name) {
    const query = (name.toString()).replaceAll(' ', '+')
    const res = await fetch(`https://openlibrary.org/search/authors.json?q=${query}`)
    const data = await res.json()
    return data
}

export async function getDataOfAuthor(key) {
    const res = await fetch(`https://openlibrary.org/authors/${key}.json`)
    const data = await res.json()
    return data
}

export async function getWorksOfAuthor(key) {
    const res = await fetch(`https://openlibrary.org/authors/${key}/works.json`)
    const works = await res.json()
    return works
}