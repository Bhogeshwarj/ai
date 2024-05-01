import axios from "axios";



export async function Logout() {
     await axios.post("/api/user/logout");


}