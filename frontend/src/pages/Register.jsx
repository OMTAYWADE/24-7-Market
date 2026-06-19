import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router-dom";
import "./auth.css";

export default function Register() {

    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        try{
            await api.post( "/auth/register", {username, email, password}
            );
            navigate("/login");
        }catch(err){
            alert( err.response?.data?.message );
        } finally {
            setLoading(false);
        }
    };

    return(
        <div className="auth-container">
            <div className="auth-card">
                <h2 className="auth-title">  Register </h2>
                <form className="auth-form" onSubmit={handleSubmit} >
                    <input className="auth-input" placeholder="Username" value={username} onChange={(e)=> setUsername( e.target.value )} />
                    <input className="auth-input" placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value )} />
                    <input className="auth-input" type="password" placeholder="Password"  value={password} onChange={(e)=> setPassword( e.target.value )}/>
                    <button disabled={loading} className={`auth-btn ${loading ? "opacity-60 cursor-not-allowed" : ""}`} >{loading ? "Registering..." : "Register"} </button>
                </form>
                <p className="auth-link"> Already have an account? <Link to="/login"> Login </Link> </p>
            </div>
        </div>
    );
}