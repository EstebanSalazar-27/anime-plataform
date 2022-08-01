
const API_URL = `https://api.jikan.moe/v4/`

const querys = {
    limit: "?limit=",
    page: "page=",
    query: "?q=", // keyword to search
    typeOf: "type=", // enum "TV" , "Movie", "Special", "ONA", "Ova"
    gender: "genres=", // num 1 - 100
    status: "status=",   // Enum: "airing" "complete" "upcoming" Available Anime statuses
    order: "order_by=", // Order Values =Enum: itle" "type" "rating" "start_date" "end_date" "episodes" "score" "scored_by" "rank" "popularity" "members" "favorites"
}

const topRecommendations = {
    top: 'top',
    recommendations: "recommendations",

}

export const getAllAnimes = async ({ query, limit = 25, page = 1 }) => {
    const res = await fetch(`${API_URL}${query}${querys.limit}${limit}&${querys.page}${page}`)
    const data = await res.json()
    return data
}
export const getTopAnimes = async ({ type }) => {
    /// options for type ; "anime", "manga"
    const res = await fetch(`https://api.jikan.moe/v4/top/${type}${querys.limit}10`)
    const data = await res.json()
    return data
}
export const getRecommendations = async ({ type }) => {
    /// Default value of top is get all the  Top Recommendations 
    /// options for top ; "top", "recommendations"
    const res = await fetch(`https://api.jikan.moe/v4/watch/${type}${querys.limit}1`)
    const data = await res.json()
    return data
}
export const getDetailById = async ({ type = "anime", id }) => {
    const res = await fetch(`${API_URL}${type}/${id}`)
    const data = await res.json()
    return data
}

export const getSearchByKeyword = async ({ type, keyword, page, }) => {
    const res = await fetch(`${API_URL}${type}${querys.query}${keyword}&${querys.page}${page}`)
    const data = await res.json()

    return data

}

export const GetGenders = async ({ type = "anime" }) => {
    const res = await fetch(`${API_URL}genres/${type}`)
    const data = await res.json()

    return data
}

export const getItemsByFilter = async ({ type = "", typeOf = "", gender = "", status = "", order = "", page = 1 }) => {
    const res = await fetch(`${API_URL}${type}?${querys.typeOf}${typeOf}&${querys.gender}${gender}&${querys.status}${status}&${querys.order}${order}&${querys.page}${page}`)
    const data = await res.json()

    return data
}