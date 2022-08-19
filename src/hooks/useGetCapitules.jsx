import { useEffect, useState } from "react"
import { getAllEpisodesById, getFollowers } from "../helpers/getAnimes"

export const useGetCapitules = ({ type, id, page }) => {
    const [dataCapitules, setDataCapitules] = useState([])
    const [loading, setLoading] = useState(false)


    const capitulesFetch = async ({ type, id, page }) => {
        setLoading(true)
        const res = await getAllEpisodesById({ type: type, id: id, page: page })

        setDataCapitules(res)
        setLoading(false)
    }

    useEffect(() => {
        capitulesFetch({ type: type, id: id, page: page })
    }, [page]);

    return { dataCapitules, loading }
}