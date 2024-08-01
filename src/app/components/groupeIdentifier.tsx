"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface GroupeIdentifierProps {
    data: {
        id : Number,
        title: string;
        image: string;
        interests: string;
        language: string;
    };
}

export default function GroupeIdentifier({ data }: GroupeIdentifierProps) {
    const router = useRouter()

    return (
        <div className="w-[50vw] h-[10vh] lg:h-[15vh] m-4 flex items-center bg-[#F1E6B8] rounded-2xl border-[#2856A3] border-[5px] cursor-pointer" onClick={
            async()=>{
                await fetch("http://localhost:3000/api/groupe/addUserToGroupe",{
                    method : "POST",
                    body : JSON.stringify({
                        userId : localStorage.getItem("id"),
                        groupId :data.id
                    })
                })
                router.push(`/`)
            }
        }>
            <Image src={data.image} alt="" width={100} height={100} className=" m-3 h-[7vh] lg:h-[10vh] w-[7vh] lg:w-[10vh]" />
            <div>
                <h1 className="font-black">{data.title}</h1>
                <h2>{data.interests}</h2>
                <h2>{data.language}</h2>
            </div>
        </div>
    );
}
