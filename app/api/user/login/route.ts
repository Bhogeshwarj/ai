import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  
    const body = await req.json();
       const user = await prisma.user.findFirst({
        where:{
            email:body?.email,
            username:body?.username,
            name:body?.name,
        }
    });

    await createCookie(user);
    return Response.json({ message: " Logged in" })

    
}

async function createCookie(user){
    cookies().set('name', user.name);
    cookies().set('username', user.username);
    cookies().set('email', user.email);
    cookies().set('isloggedIn','true');
   }