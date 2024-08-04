"use client"
import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
    const params = useParams<{ groupId: string }>()
    /*
    const [users,setUsers] = useState()
    useEffect(() => {
        console.log(params.groupId);

        (async () => {

            const res = await fetch(`http://localhost:3000/api/groupe/getGroupUsers?groupId=${params.groupId}`)
            const data = await res.json()
            setUsers(data)            
        })()

    }, [])
*/
    return <></>
}