import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const prisma = new PrismaClient()
    const data = await req.json()

    const group = await prisma.group.create(
        {
            data
        }
    )

    const user = await prisma.user.findUnique({
        where: {
            id: data.userId
        }
    })

    const groupUser = await prisma.groupUser.create(
        {
            data: {
                profile:`${user?.profile}`,
                groupId : group.id,
                userId : data.userId,
                name :`${user?.name}`
            }
        }
    )

    if (group) {
        return NextResponse.json(
            {
                "status": "group created "
            }
        )
    }
}