import { Link } from "react-router-dom";
import data from "../data"

function Home() {
  return (
    <div>
      <h1>Products</h1>
      <div className="products">
        {data.products.map((p) => (
          <div className="product" key={p.slug}>
            <Link to={`/product/${p.slug}`}>
              <img src={p.image} alt={p.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${p.slug}`}>
                <p>{p.name}</p>
              </Link>
              <p>
                <strong>$ {p.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
