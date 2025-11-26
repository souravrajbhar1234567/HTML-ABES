import React from "react";

export default function Home({ products = [], addToCart = () => {} }) {
  return (
    <main className="comp-home">
      <h2>Products</h2>

      <div className="grid">
        {products.length === 0 && <div className="no-results">No products found.</div>}
        {products.map((p) => (
          <article className="card" key={p.id}>
            <img src={p.image} alt={p.name} />
            <div className="card-body">
              <h3>{p.name}</h3>
              <p className="desc">{p.description}</p>
              <div className="card-foot">
                <strong>${Number(p.price).toFixed(2)}</strong>
                <button onClick={() => addToCart(p)}>Add to cart</button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <style>{`
        .comp-home{ padding:20px; }
        .grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:16px;
          margin-top:12px;
        }
        .card{
          border:1px solid #e6e6e6;
          border-radius:8px;
          overflow:hidden;
          display:flex;
          flex-direction:column;
          background:#fff;
        }
        .card img{
          width:100%;
          height:140px;
          object-fit:cover;
          background:#f6f6f6;
        }
        .card-body{ padding:12px; display:flex; flex-direction:column; gap:8px; flex:1; }
        .card h3{ margin:0; font-size:16px; }
        .desc{ color:#666; font-size:13px; margin:0; min-height:36px; }
        .card-foot{ margin-top:auto; display:flex; justify-content:space-between; align-items:center; gap:8px; }
        .card-foot button{
          background:#131921;
          color:#fff;
          border:none;
          padding:8px 10px;
          border-radius:6px;
          cursor:pointer;
        }
        .no-results{ color:#777; padding:16px; }
            `}</style>
          </main>
        );
      }