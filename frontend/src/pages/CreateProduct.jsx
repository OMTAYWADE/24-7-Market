import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function CreateProduct() {

    const navigate = useNavigate();

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [price,setPrice] = useState("");
    const [category,setCategory] = useState("");
    const [contact_number,setContactNumber] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/products",{ title, description, price, category, contact_number });
            alert("Product Created Successfully");
            navigate("/");
        } catch(err) {
            alert( err.response?.data?.message ||"Failed to create product"
            );
        }
    };

    return (
        <Layout>
            <Navbar />
            <div
                style={{ maxWidth:"900px", margin:"40px auto", padding:"0 20px"  }}  >

                <div style={{ background:"#CEF2A1", border:"1px solid #1e293b", borderRadius:"20px", padding:"30px", boxShadow:"0 10px 30px rgba(0,0,0,0.4)" }} >

                    <h1 style={{ textAlign:"center", fontSize:"32px", marginBottom:"10px" }} > Create Product </h1>

                    <p style={{ textAlign:"center", color:"#94a3b8", marginBottom:"30px" }} > List your product for other students </p>
                    <form onSubmit={handleSubmit} style={{ display:"flex", flexDirection:"column", gap:"18px" }} >

                        <div>
                            <label>Product Title</label>
                            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="MacBook Air M1"  style={inputStyle}  />
                        </div>

                        <div>
                            <label>Description</label>
                            <textarea rows="5" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="Describe your product..." style={inputStyle} />
                        </div>

                        <div>
                            <label>Price</label>
                            <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)}  placeholder="5000" style={inputStyle} />
                        </div>

                        <div>
                            <label>Category</label>
                            <input type="text" value={category} onChange={(e)=>setCategory(e.target.value)} placeholder="Electronics" style={inputStyle} />
                        </div>

                        <div>
                            <label>Contact Number</label>
                            <input type="text" value={contact_number} onChange={(e)=>setContactNumber(e.target.value)} placeholder="9876543210" style={inputStyle} />
                        </div>

                        <button type="submit" style={{ background:"#2563eb", color:"white", padding:"14px", borderRadius:"12px", fontWeight:"bold", fontSize:"16px",  marginTop:"10px"  }}  >  Create Product </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

const inputStyle = {
    width: "100%", padding: "14px", marginTop: "8px", background: "#EDF8CE", border: "1px solid #334155", borderRadius: "10px", color: "gray"
};