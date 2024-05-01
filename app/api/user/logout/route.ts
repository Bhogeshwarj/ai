
import { NextRequest, NextResponse } from 'next/server';

import { cookies } from "next/headers";

  export async function POST(req: NextRequest) {
  
        const cookieStore = cookies();
        cookieStore.getAll().forEach((cookie) => {
            cookieStore.delete(cookie.name);
          });
      
      
return NextResponse.json({ message: " Signed up" });

}