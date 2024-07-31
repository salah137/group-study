import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const prisma = new PrismaClient()

    const groups = await prisma.group.findMany({})

    return NextResponse.json(
        groups
    )
}