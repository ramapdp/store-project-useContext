import { useEffect, useState } from "react";
import Product from "./Product";
import Spinner from "./Spinner";
import SearchContext from "./SearchContext";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchKeywords = SearchContext._currentValue;

  useEffect(() => {
    requestProducts();
  }, []);

  async function requestProducts() {
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/ramapdp/db-products-json/products"
      );
      const data = await response.json();

      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchKeywords.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          {!products.length ? (
            <h1 className="text-black py-8 flex justify-center text-xl font-semibold">
              No Products Found.
            </h1>
          ) : (
            <div className="mx-auto max-w-7xl overflow-hidden px-4 py-8 sm:px-6 sm:py-8 lg:px-8">
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
                {filteredProducts.map((product) => (
                  <Product key={product.id} {...product} />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductList;
