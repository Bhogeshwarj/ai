'use client'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import Link from "next/link"
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Correct import for useRouter

export function Signup() {
  const router = useRouter();
  const [name, setName] = useState(''); // State for name
  const [username, setUsername] = useState(''); // State for username
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password

// TODO
  // import client from "@/db"
  
  // export async function signup(username: string, password: string) {
  //     // should add zod validation here
  //     const user = await client.user.create({
  //         data: {
  //             username: username,
  //             password: password
  //         }
  //     });
  
  //     console.log(user.id);
  
  //     return "Signed up!"
  // }
  async function submitHandler(event) {
    event.preventDefault(); // Prevent default form submission
    try {
      const response = await axios.post("http://localhost:3000/api/user", {
        name: name, // Pass name from state
        username: username, // Pass username from state
        email: email, // Pass email from state
        password: password // Pass password from state
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
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your information to create an account.</p>
        </div>
        <form > 
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" value={password} onChange={(e) => setPassword(e.target.value)} required type="password" />
            </div>
            <Button onClick={submitHandler}className="w-full" type="submit">
              Sign up
            </Button>
          </div>
        </form>
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          Already have an account?
          <Link className="font-medium underline text-black px-1 underline-offset-4" href="/login">
            Log in
          </Link>
        </div>
      </div>
    </div>
  )
}
