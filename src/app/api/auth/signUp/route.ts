import { PrismaClient } from "@prisma/client";
import argon from "argon2"
import jwt from "jsonwebtoken"
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const prisma = new PrismaClient()
        const data = await req.json()
        const hashed = await argon.hash(data.password)

        const user = await prisma.user.create(
            {
                data: {
                    name: data.name,
                    email: data.email,
                    password: hashed,

                    language: data.language,
                    study: data.study,
                    interests: data.interests
                }
            }
        )

        const token = await jwt.sign(data.email, `${process.env.TOKEN}`)
        return NextResponse.json(
            {
                "status": "done",
                "jwt": token,
                "id": user.id
            }
        )
    } catch (e) {
        console.log(e);

        return NextResponse.json(
            {
                e
            }
        )
    }
}