
import Image from "next/image";

function ProductCard(props) {
  const product = props.product;
  return (
    <div className="container1">
      <div className="card" style={{width:'18rem'}} >
      <Image src={product?.image} className="card-img-top" alt="..." width={170} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <a href={'/products/' + product.id} className="btn btn-danger">
          Click Here
        </a>
      </div>
    </div>
    </div>
  );
}

export default ProductCard;
