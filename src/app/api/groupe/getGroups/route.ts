import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const prisma = new PrismaClient();
    const  { searchParams }  = new URL(req.url);
    const userId = searchParams.get("userId");

    console.log(userId);
    

    if (!userId) {
        return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }

    const groupUsers = await prisma.groupUser.findMany({
        where: {
            userId: parseInt(userId, 10),
        },
    });



    const groups = await Promise.all(
        groupUsers.map(async (e) => {
            const group = await prisma.group.findUnique({
                where: {
                    id: e.groupId,
                },
            });
            return group;
        })
    );

    return NextResponse.json({ groups });
}
