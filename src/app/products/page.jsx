
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
const getProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
};
async function Products() {
  const products = await getProducts();
  return (
    <>
      <h3>This is product page</h3>

      {products.map((prd,i) => {
        return <ProductCard product={prd} key={i}/>;
      })}
      <Banner title={"This is from product page"} />
    </>
  );
}

export default Products;
