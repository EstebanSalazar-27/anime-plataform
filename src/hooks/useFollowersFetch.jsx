import { useEffect, useState } from "react"
import { getFollowers } from "../helpers/getAnimes"

export const useFollowersFetch = ({ type, id }) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


    const followersFetch = ({ type, id }) => {
        setTimeout(async() => {
            setLoading(true)
            const res = await getFollowers({ type: type, id: id })
            setData(res)
            setLoading(false)
        }, 2000);

    }

    useEffect(() => {
        followersFetch({ type: type, id: id })
    }, []);

    return { data, loading }
}