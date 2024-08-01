import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { DiDart } from "react-icons/di";

export async function POST(req: Request) {
    const prisma = new PrismaClient()
    const data = await req.json()

    const user = await prisma.user.findUnique(
        {
            where: {
                id: Number(data.userId)
            }
        }
    )

    const d = (await prisma.groupUser.findMany({
        where: {
            groupId: Number(data.groupId),
            userId: Number(data.userId)
        }
    }))

    console.log(d);
    

    if (d.length == 0)
        await prisma.groupUser.create(
            {
                data: {
                    groupId: Number(data.groupId),
                    userId: Number(data.userId),
                    profile: `${user?.profile}`,
                    name: `${user?.name}`
                }
            }
        )

    return NextResponse.json(
        {
            "status": "done"
        }
    )
}