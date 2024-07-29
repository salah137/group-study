import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req : Request) {
    const prisma = new PrismaClient()
    const data = await req.json()

    const user = await prisma.user.findUnique(
        {
            where : {
                id : data.userId
            }
        }
    )

    await prisma.groupUser.create(
        {
            data : {
                groupId : data.groupId,
                userId : data.userId,
                profile : "",
                name : `${user?.name}`
            }
        }
    )

    return NextResponse.json(
        {
            "status" : "done"
        }
    )
}