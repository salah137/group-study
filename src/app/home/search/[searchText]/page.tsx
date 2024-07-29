"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default  function page() {
    const params = useParams<{ searchText: string }>()
    const [results, setResults] = useState([])

    useEffect(
        () => {
            (
                async () => {
                    const res = await fetch(`http://localhost:3000/api/groupe/searchGroups?search=${params.searchText}`)
                    const data = await res.json()
                    setResults(data)
                }
            )()
        }, []
    )
    return <main className="absolute left-[65vw] top-1/2">
        {
            results.length == 0? <h1>No Group Found</h1>:<></>
        }
    </main> 
}