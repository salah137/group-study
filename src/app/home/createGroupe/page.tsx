"use client"

import app from "@/app/firebase-config";
import { FirebaseStorage, getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import Image from "next/image";
import { useState } from "react";
import { FaFileUpload } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function page() {
    const [file, setFile] = useState<string>()
    const [image, setImage] = useState<any>()
    const [title, setTitle] = useState("")
    const [interests, setIntersts] = useState("")
    const [lang, setLang] = useState("")
    const [imageUrl, setImageUrl] = useState("https://firebasestorage.googleapis.com/v0/b/prepare-91cd7.appspot.com/o/images%2Fdefault-group.png?alt=media&token=b9eb4e44-9797-4b3d-86ca-64e9ce1a792c")

    const router = useRouter()

    const uploadImage = async () => {
        const metadata = {
            // Use underscores or camelCase
            contentType: 'image/png',
            custom_key: 'some value',  // Using underscores
            customKeyValue: 'some value', // Using camelCase
        };

        const storage = getStorage(app)

        const fileRef = ref(storage, `images/${title}`)
        await uploadBytes(fileRef, image, metadata)
        return (getDownloadURL(fileRef));
    }

    const createGroupe = async () => {
        if (file) {
            const url = await uploadImage()
            setImageUrl(url)
        }

        const res = await fetch(
            "http://localhost:3000/api/groupe/createGroup",{
                method : "POST",
                body : JSON.stringify({
                    profile : imageUrl,
                    topic : interests,
                    groupName : title,
                    userId : Number(localStorage.getItem("id"))
                })
            }
        )

        console.log(await res.json());
        

        router.push('/')

    }

    return <main className="absolute left-[5vw] top-[10vh] lg:left-[30vw] w-[80vw] text-center h-[70vh] bg-[#F1E6B8] m-5 rounded-xl  flex-col justify-center items-center hidden lg:flex lg:w-[60vw]" id="content">
        <div className="w-[30vw] bg-[#2856A3] h-[30vw] lg:h-[15vw] lg:w-[15vw] flex items-center justify-center rounded-[50%] text-4xl text-[#F1E6B8] hover:bg-[#98accf] cursor-pointer" onClick={
            () => {
                let element: HTMLElement = document.querySelector("#file-upload") as HTMLElement;
                element.click()
            }
        }>
            <input type="file" accept="image/* && video/*" id="file-upload" hidden onChange={
                ({
                    target: { files }
                }) => {
                    files![0] && setImage(files![0])

                    if (files![0]) {
                        setFile(URL.createObjectURL(files![0]))
                    }
                }
            } />
            {file ? <Image src={`${file}`} alt="" width={100} height={100} className="w-[30vw] h-[30vw] lg:w-[15vw] lg:h-[15vw] rounded-[50%]" /> : <FaFileUpload />}

        </div>

        <input className="m-3 rounded-sm p-2" placeholder="groupe name" value={title} onChange={
            (e) => {
                setTitle(e.target.value)
            }
        }></input>
        <input className="m-3 rounded-sm p-2" placeholder="groupe language" value={interests} onChange={
            (e) => {
                setIntersts(e.target.value)
            }
        }></input>
        <input className="m-3 rounded-sm p-2" placeholder="groupe interests" value={lang} onChange={
            (e) => {
                setLang(e.target.value)
            }
        }></input>
        <button className="bg-[#2856A3] w-[20vw] text-[#F1E6B8] font-black h-[5vh] rounded-lg mt-[1vh]" onClick={
           async () => {
                await createGroupe()
            }
        }>Create</button>

    </main>
}
