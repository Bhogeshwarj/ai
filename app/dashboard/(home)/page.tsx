
import { Button } from '@/components/ui/button'
import React from 'react'
import Link from "next/link"

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"

const page = () => {
  return (
    <div className='flex flex-col text-center justify-center '>

<div className="my-auto p-5 py-48 px-20">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle>Get Started </CardTitle>
                <CardDescription>Select or Converse with AI here</CardDescription>
              </CardHeader>
              <CardContent className='flex '>
                <div className="w-full  mx-2  py-2" >
                <Link href="/dashboard/models">
                    <div>
                <Button  className='px-10' size="sm">
                      
                      Models
                </Button>
                      </div>
                </Link>

                </div>
                <div  className="w-full mx-2 py-2">

              <Link href="/dashboard/chat">
              <Button className='px-10' size="sm">
                   <div>
                   Chat
                    </div>
                </Button>
              </Link>  
                </div>
              </CardContent>
            </Card>
          </div>
    </div>
  )
}

export default page