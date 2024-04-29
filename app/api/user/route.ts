import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers'
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
    await createCookie(user);
    return NextResponse.json({ message: " Signed up" },user);
    
}
async function createCookie(user){
    cookies().set('name', user.name);
    cookies().set('username', user.username);
    cookies().set('email', user.email);
    cookies().set('isloggedIn','true');
   }
// export async function GET(req:NextRequest) {
//     const body2 = await req.json();
//     const body = JSON.parse(body2);
//     const user = await prisma.user.findFirst({
//         where:{
//             email:body?.email,
//             username:body?.username,
//             name:body?.name,
//         }
//     });
//     return Response.json({ name: user?.username, email: user?.username })

// }

export async function GET(req:NextRequest) {
    const {searchParams} = new URL(req.url);
    const email = searchParams.get('email');
    const username = searchParams.get('username');
    const name = searchParams.get('name');
    const data = {
        email,
        username,
    }
    // console.log(body);
    const user = await prisma.user.findFirst({
                where:{
                    email:data?.email,
                    username:data?.username,
                }
            });
    if(!user){
        return Response.json({message:"no user nme found"})
    }
    return Response.json({name:user.name,username:user.username,email:user.email  })
  }
