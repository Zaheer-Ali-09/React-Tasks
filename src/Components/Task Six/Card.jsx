// App.jsx 
// sir Jee ye AI ka work hai mujhe ye samj nhi aya tha 

function ProductCard({ title, price, image, inStock }) {
  return (
    <div style={{
      width: "220px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px"
    }}>
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />

      <h3>{title}</h3>
      <p>Price: Rs {price}</p>

      <p style={{ color: inStock ? "green" : "red" }}>
        {inStock ? "In Stock" : "Out of Stock"}
      </p>

      <button
        disabled={!inStock}
        style={{
          width: "100%",
          padding: "8px",
          background: inStock ? "black" : "gray",
          color: "white",
          cursor: inStock ? "pointer" : "not-allowed"
        }}
      >
        Buy Now
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <ProductCard
        title="Wireless Headphones"
        price="4500"
        image="https://via.placeholder.com/200"
        inStock={true}
      />

      <ProductCard
        title="Smart Watch"
        price="7000"
        image="https://via.placeholder.com/200"
        inStock={false}
      />
    </div>
  );
}
