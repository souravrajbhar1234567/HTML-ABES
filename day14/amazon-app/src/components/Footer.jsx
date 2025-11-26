import React from "react";

export default function Footer() {
  return (
    <footer className="app-footer">
      <div>© {new Date().getFullYear()} Amazon Mock — Dummy Store</div>

      <style>{`
        .app-footer{
          background:#f3f3f3;
          padding:14px 18px;
          text-align:center;
          border-top:1px solid #e1e1e1;
          font-size:14px;
          color:#333;
        }
      `}</style>
    </footer>
  );
}