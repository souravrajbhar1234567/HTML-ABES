import React, { useEffect, useState } from "react";

export default function SearchBar({ value = "", onChange = () => {} }) {
  const [q, setQ] = useState(value);

  useEffect(() => {
    setQ(value);
  }, [value]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onChange(q.trim());
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="search"
        aria-label="Search products"
        placeholder="Search products..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <button type="submit">Search</button>

      <style>{`
        .search-bar{
          display:flex;
          gap:8px;
          width:100%;
        }
        .search-bar input{
          flex:1;
          padding:8px 10px;
          border-radius:4px;
          border:1px solid rgba(0,0,0,0.12);
          outline:none;
        }
        .search-bar button{
          background:#febd69;
          border:none;
          padding:8px 12px;
          border-radius:4px;
          cursor:pointer;
          font-weight:600;
        }
        .search-bar input:focus{
          box-shadow:0 0 0 3px rgba(255,189,105,0.15);
        }
      `}</style>
    </form>
  );
}