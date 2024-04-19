
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
                <CardTitle>Take Notes</CardTitle>
                <CardDescription>Save your notes here</CardDescription>
              </CardHeader>
              <CardContent className='flex '>
                <Button className="w-1/2 mx-5" size="sm">
                    Notes
                </Button>
                <Button className="w-1/2 mx-5" size="sm">
                    Notes
                </Button>
              </CardContent>
            </Card>
          </div>
    </div>
  )
}

export default page