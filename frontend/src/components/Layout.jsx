export default function Layout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg,#f8fafc,#e2e8f0,#cbd5e1)"
      }}
    >
      {children}
    </div>
  );
}