import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navLink = (path) => location.pathname === path ? "bg-blue-600 text-white" : "text-slate-300 hover:text-white hover:bg-slate-800";

  return (

    <nav style={{ background: "#d0ff03",  borderBottom: "1px solid #1e293b", position: "sticky",  top: 0, zIndex: 100, }} >
      <div style={{ maxWidth: "1200px",  margin: "0 auto", padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", }} >
        {/* Logo Section */}
        <div>
          <h1 style={{ fontSize: "24px", fontWeight: "700", color: "black",  }} > 24/7 Marketplace </h1>
          <p style={{ color: "gray", fontSize: "13px", marginTop: "2px", }} > Buy • Sell • Exchange Student Products </p>
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", alignItems: "center",  gap: "12px",  }} >
          <Link to="/" className={navLink("/")} style={linkStyle} >📦 Products</Link>
          <Link to="/create" className={navLink("/create")}  style={linkStyle} >  ➕ Create </Link>
          <Link to="/requests" className={navLink("/requests")} style={linkStyle} > 📨 Requests</Link>

          <button onClick={() => { localStorage.removeItem("token"); window.location.href = "/login"; }}
            style={{ background: "#dc2626", color: "white", border: "none", padding: "10px 18px", borderRadius: "10px", cursor: "pointer", fontWeight: "600",  }} > Logout </button>
        </div>
      </div>
    </nav>
  );
}

const linkStyle = {
  padding: "10px 16px", borderRadius: "10px", textDecoration: "none", transition: "0.3s", fontWeight: "500", color: "black"
};