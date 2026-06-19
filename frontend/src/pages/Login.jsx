import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import "./auth.css";

export default function Login() {
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const { data } = await api.post( "/auth/login", { email, password} );
            localStorage.setItem("token",data.token );
            navigate("/");
        }catch(err){
            alert( err.response?.data?.message );
        }
    };

    return(
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title"> Login </h2>
                <form className="auth-form" onSubmit={handleSubmit} >
                    <input className="auth-input" placeholder="Email" value={email} onChange={(e)=> setEmail( e.target.value ) }/>
                    <input className="auth-input" type="password"  placeholder="Password" value={password} onChange={(e)=> setPassword( e.target.value ) } />
                    <button className="auth-btn" > Login </button>
                </form>
                <p className="auth-link"> No account?<Link to="/register">  Register </Link> </p>
            </div>
        </div>
    );
}