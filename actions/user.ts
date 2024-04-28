"use server"
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function signup(name:string, email:string,username: string, password: string) {
    // should add zod validation here
    try{
    const user = await prisma.user.create({
        data: {
            name:name,
            username: username,
            email:email,
            password: password,
            
        }
    });

    console.log(user.id);
}catch(err){
    console.log(err)
  }
    return "Signed up!"
}