import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

export default function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get("/products");
      setProducts(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const sendRequest = async (id) => {
    try {
      await api.post(`/requests/${id}`);
      alert("Request Sent Successfully");
    } catch (err) {
      alert( err.response?.data?.message ||  "Failed to send request" );
    }
  };

  return (
    <Layout>
      <Navbar />

      <div style={{  maxWidth: "1300px", margin: "0 auto", padding: "40px 24px", }} >
        {/* Hero Section */}
        <div style={{ background: "", border: "1px solid #1e293b",  borderRadius: "20px", padding: "40px", marginBottom: "35px", }} >
          <h1 style={{ fontSize: "40px", fontWeight: "700", marginBottom: "10px",  }}  > Student Marketplace </h1>

          <p style={{ color: "#94a3b8", fontSize: "18px",  }} > Buy, Sell and Exchange products with students securely.
          </p>
        </div>

        {/* Products */}
        {loading ? (
          <div style={{ textAlign: "center", padding: "50px", color: "#94a3b8", }} > Loading Products...
          </div> ) : products.length === 0 ? (
          <div style={{ background: "gray", border: "1px solid #1e293b", borderRadius: "20px", padding: "50px", textAlign: "center",  }}  >
            <div style={{ fontSize: "60px", marginBottom: "15px", }} > 📦 </div>

            <h2 style={{ fontSize: "28px", marginBottom: "10px", }} >  No Products Yet </h2>

            <p style={{ color: "#94a3b8",  }} > Be the first student to list a product. </p>
          </div> ) : ( <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: "24px", }} >
            {products.map((product) => (
              <div  key={product.id} style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: "20px", overflow: "hidden", transition: "0.3s", }} >
                {/* Product Image */}
                <div style={{ height: "200px", background: "linear-gradient(135deg,#1e293b,#334155)", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "60px", }} > 📦
                </div>

                <div
                  style={{padding: "20px", }} >
                  <h2 style={{ fontSize: "20px", marginBottom: "10px", color: "white" }}  > {product.title} </h2>

                  <p style={{ color: "#94a3b8", marginBottom: "15px", minHeight: "40px",  }} >  {product.description} </p>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px", }} >
                    <span style={{ color: "#22c55e",fontSize: "20px", fontWeight: "700", }} > ₹{product.price} </span>
                    <span style={{ background: "#1e293b", padding: "6px 12px", borderRadius: "20px", fontSize: "13px", }} >  {product.category} </span>
                  </div>

                  <p style={{color: "#cbd5e1", marginBottom: "16px",  }} > 📞 {product.contact_number} </p>

                  <button onClick={() => sendRequest(product.id) }
                    style={{ width: "100%", background: "#2563eb", color: "white", padding: "12px", border: "none", borderRadius: "10px", fontWeight: "600", cursor: "pointer", }} >  Send Request </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
}