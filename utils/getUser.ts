import { cookies } from "next/headers";

interface UserInterface {
  name: string;
  username: string;
  email: string;
  isLoggedIn: boolean;
}

export function getUserDetails(): UserInterface {
  const cookieStore = cookies();
  
  const nameOfUser = cookieStore.get('name')?.value || '';
  const usernameOfUser = cookieStore.get('username')?.value || '';
  const emailOfUser = cookieStore.get('email')?.value || '';
  const isLoggedInValue = cookieStore.get('isloggedIn')?.value;


  const isLoggedIn = (isLoggedInValue === 'true');

  return {
    name: nameOfUser,
    username: usernameOfUser,
    email: emailOfUser,
    isLoggedIn: isLoggedIn // Assign the boolean value to isLoggedIn property
  };
}
