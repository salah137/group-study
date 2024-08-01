"use client"
import GroupeIdentifier from "@/app/components/groupeIdentifier";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import gsap from "gsap";
export default function page() {
    const params = useParams<{ searchText: string }>()
    const [results, setResults] = useState([])

    useEffect(
        () => {
            (
                async () => {
                    const res = await fetch(`http://localhost:3000/api/groupe/exploreGroups`)
                    const data = await res.json()
                    setResults(data)
                }
            )()
        }, []
    )

    
    return <main className={`absolute left-[5vw] top-[10vh] flex-col lg:left-[30vw] overflow-y-scroll h-[90vh] w-[60vw] overflow-x-hidden content ${window.screen.width <1000 && "hidden"}`} id="content">
        {results.length == 0 ? <h1>No group found</h1> : <>
            {
                results.length == 0 ? <h1>Nothing found</h1> : <>
                    {
                        results.map((e : any) => {
                            return <GroupeIdentifier data = {
                                {
                                    id : e.id,
                                    title : e.groupName,
                                    interests : e.topic,
                                    language: e.language,
                                    image : e.profile
                                }
                            }/>
                        })
                    }
                </>
            }
        </>
        }

    </main>
}

