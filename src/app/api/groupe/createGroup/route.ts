import { PrismaClient } from "@prisma/client";

export async function POST(req : Request) {
    const prisma = new PrismaClient()
    const data = await req.json()
}