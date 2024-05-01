'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import Link from "next/link"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Correct import for useRouter

export function Login() {
  const router = useRouter();
  const [username, setUsername] = useState(''); // State for username
  const [password, setPassword] = useState(''); // State for password

  async function submitHandler(event) {
    event.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post("/api/user/login", {
       username:username , 
        password: password 
      });
      console.log("User created:", response.data);
      router.push('/');
    } catch (error) {
      console.error("Error creating user:", error);
    }
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100 px-4 ">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Log in</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your information to Log into your account</p>
        </div>
        <form > 
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} required type="password" />
            </div>
            <Button onClick={submitHandler}className="w-full" type="submit">
                Login
            </Button>
          </div>
        </form>
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          Dont have an account?
          <Link className="font-medium underline text-black px-1 underline-offset-4" href="/signup">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
