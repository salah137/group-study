import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const prisma = new PrismaClient();
    const  { searchParams }  = new URL(req.url);
    const groupId = searchParams.get("groupId");    

    if (!groupId) {
        return NextResponse.json({ error: "Group ID is required" }, { status: 400 });
    }

    const groupUsers = await prisma.groupUser.findMany({
        where: {
            groupId: parseInt(groupId, 10),
        },
    });

    return NextResponse.json( groupUsers  );
}
