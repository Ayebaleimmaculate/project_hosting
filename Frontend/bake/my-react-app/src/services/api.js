//login
import axios from "axios";

const Login = axios.create({
  baseURL: " http://127.0.0.1:5000/api/v1/auth/login", 
});

export const fetchLogin  = () => Login  .post("/login");
export {Login};


//user
import axios from "axios";

const User = axios.create({
  baseURL: " http://127.0.0.1:5000/api/v1/auth/register_user", 
});

export const fetchUser  = () => User  .post("/auth");
export {User};




