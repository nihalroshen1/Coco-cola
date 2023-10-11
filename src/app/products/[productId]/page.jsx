import Image from "next/image";
async function getProductDetailById(id) {
    const response = await fetch('https://fakestoreapi.com/products/' +id);
    const json = await response.json();
    return json;
}
async function ProductDetail(props) {
    const productDetail = await getProductDetailById(props.params.productId); 
    return ( 
        <div>
            <div>
            <h3>{productDetail.title}</h3>
            <Image height={"150"} alt={""} width={"200"} src={productDetail.image} />
        </div>
        </div>
     );
}

export default ProductDetail;