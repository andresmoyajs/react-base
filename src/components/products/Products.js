import { Loader } from "../layout/Loader";
import { Product } from "../product/Product";

export const Products = ({ products, col, loading }) => {
  console.log(products);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      {products ? (
        products.map((productElement) => (
          <Product key={productElement.id} product={productElement} col={col} />
        ))
      ) : (
        <Loader />
      )}
    </>
  );
};
