import { headers } from "next/headers";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken"

export async function middleware(req: Request) {

    if (req.url == "http://localhost:3000/" || req.url == "http://localhost:3000/signUp" || req.url == "http://localhost:3000/signIn") {
        return NextResponse.next()
    } else {
        const headerList = headers()
        const token = headerList.get("token")
        if (jwt.verify(`${token}`, `${process.env.TOKEN}`)) {
            return NextResponse.next()
        } else {
            return NextResponse.json({
                "bad request":"invalid auth token"
            })
        }
    }
}

export const config = {
    matcher : ["/api"]
}