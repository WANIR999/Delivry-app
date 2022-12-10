import {Outlet, Link} from "react-router-dom";
import { useState ,useEffect } from "react";
import axios from "axios";
import Logout from "./logout";

const Navbar = () => {
    const [role,setRole]=useState("")
    const data= async ()=>{
     const user= await axios.post('http://localhost:8080/api/auth/decrypt',{token:localStorage.getItem('token')})
     setRole(user.data.role)
    }
    useEffect(()=>{
     data()
    },[])
    const homeurl="/auth/"+role+"/home"
    const reseturl="/auth/"+role+"/resetpassword"
    return (
       <div>
        <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-between align-items-center">
            <Link to={homeurl}  className="btn navbar-brand" >marhaba</Link>
            <div className="w-25 d-flex justify-content-around align-items-center">
            <Link to={reseturl}  className="btn text-white" >Reset password</Link>
            <Logout/>
            </div>
        </div>
        </nav>
        <Outlet />
       </div>
    );
  };
  
  export default Navbar;