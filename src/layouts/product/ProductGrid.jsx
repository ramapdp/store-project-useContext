import Product from "@layouts/product/components/Product";
import Spinner from "@components/loading/Spinner";

const ProductGrid = ({ products, isLoading, error }) => {
  if (isLoading) return <Spinner />;
  
  if (error) {
    return (
      <h1 className="text-black py-8 flex justify-center text-xl font-semibold">
        Error loading products.
      </h1>
    );
  }

  if (!products.length) {
    return (
      <h1 className="text-black py-8 flex justify-center text-base font-semibold">
        No Products Found.
      </h1>
    );
  }

  return (
    <div className="mx-auto max-w-7xl overflow-hidden py-8 sm:py-8">
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-8">
        {products.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
