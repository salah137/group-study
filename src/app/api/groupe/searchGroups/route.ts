import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const search = searchParams.get("search");

    const groups = (await prisma.group.findMany({})).filter(
        (e)=>{
            return (e.topic == search) || (e.groupName.includes(`${search}`))
        }
    )

    console.log(groups);
    
    return NextResponse.json(
        groups
    )

}