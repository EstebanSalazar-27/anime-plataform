
const API_URL = `https://api.jikan.moe/v4/`

const querys = {
    limit: "?limit=",
    page: "page=",
}
export const getAllAnimes = async ({ query, limit = 25, page = 1 }) => {

    const res = await fetch(`${API_URL}${query}${querys.limit}${limit}&${querys.page}${page}`)
    const data = await res.json()

    return data
}


export const getTopAnimes = async ({ type }) => {
    const res = await fetch(`https://api.jikan.moe/v4/top/${type}${querys.limit}10`)
    const data = await res.json()
    return data
}

export const getById = async () => {
    const res = await fetch(`${API_URL}`)
}