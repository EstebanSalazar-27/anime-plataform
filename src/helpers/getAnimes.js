
const API_URL = `https://api.jikan.moe/v4/`

const querys = {
    limit: "?limit=",
    page: "page=",
    query: "?q=",
    typeOf: "type="
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
export const getDetailById = async ({ type = "anime", id }) => {
    const res = await fetch(`${API_URL}${type}/${id}`)
    const data = await res.json()
    return data
}

export const getSearchByKeyword = async ({ type, keyword, typeOf = "all", page, }) => {
    const res = await fetch(`${API_URL}${type}${querys.query}${keyword}&${querys.typeOf}${typeOf}&${querys.page}${page}`)
    const data = await res.json()
    console.log(data)

    return data

}