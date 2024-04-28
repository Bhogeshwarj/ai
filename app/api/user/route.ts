import { NextRequest, NextResponse } from 'next/server';

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function POST(req: NextRequest) {
  
        const body = await req.json();


    const user = await prisma.user.create({
        data: {
            name:body.name,
            username: body.username,
            email:body.email,
            password: body.password,
            
        }
    });

    return NextResponse.json({ message: "Not Signed up" });
    
}

export async function GET() {
    const user = await prisma.user.findFirst({});
    return Response.json({ name: user?.username, email: user?.username })
}
