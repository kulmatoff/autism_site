import "./App.css";

export function ProductCard(props) {
  const { id, image, category, title, price } = props.data;

  return (
    <div className="product" key={id}>
      <div className="prodct-upper">
        <img src={image} alt="" />
        <p className="product-category">{category}</p>
        <h3 className="product-name">{title}</h3>
      </div>
      <div className="price">
        <h2 className="price-label">${price}</h2> <button>Add to cart</button>
      </div>
    </div>
  );
}
