import { useState } from "react";
import { useProducts } from "@hooks/useProducts";
import ContainerPage from "@components/container/ContainerPage";
import ContainerSection from "@components/container/ContainerSection";
import FilterSection from "@components/filters/FilterSection";
import ProductGrid from "@layouts/product/ProductGrid";

const ProductList = () => {
  const { data: products, isLoading, error } = useProducts();
  const [showFilters, setShowFilters] = useState({
    price: true,
    color: true,
    size: true,
  });

  return (
    <ContainerPage pageStyle="bg-white min-h-screen">
      <ContainerSection sectionStyle="flex gap-6">
        <aside className="sticky top-16 h-screen">
          <FilterSection
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />
        </aside>
        <main className="flex-1">
          <ProductGrid
            products={products}
            isLoading={isLoading}
            error={error}
          />
        </main>
      </ContainerSection>
    </ContainerPage>
  );
};

export default ProductList;
