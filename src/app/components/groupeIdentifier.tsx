"use client";
import Image from "next/image";

interface GroupeIdentifierProps {
    data: {
        title: string;
        image: string;
        interests: string;
        language: string;
    };
}

export default function GroupeIdentifier({ data }: GroupeIdentifierProps) {
    console.log("pp");
    console.log(data.title);

    return (
        <div className="w-[50vw] h-[10vh] lg:h-[15vh] m-4 flex items-center bg-[#F1E6B8] rounded-2xl border-[#2856A3] border-[5px]">
            <Image src={data.image} alt="" width={100} height={100} className=" m-3 h-[7vh] lg:h-[10vh] w-[7vh] lg:w-[10vh]" />
            <div>
                <h1 className="font-black">{data.title}</h1>
                <h2>{data.interests}</h2>
                <h2>{data.language}</h2>
            </div>
        </div>
    );
}
