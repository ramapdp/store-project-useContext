import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@layouts/navbar/Navbar";
import ProductList from "@layouts/ProductList";
import PageNotFound from "@layouts/PageNotFound";
import Details from "@layouts/Details";
import Cart from "@layouts/Cart";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchContext from "@utils/context/SearchContext";
import Hero from "@layouts/hero";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

function App() {
  const [searchKeywords, setSearchKeywords] = useState("");

  const onSearchEventHandler = (event) => {
    return setSearchKeywords(event.target.value);
  };

  return (
    <BrowserRouter>
      <SearchContext.Provider value={searchKeywords}>
        <QueryClientProvider client={queryClient}>
          <header className="sticky top-0 z-50 bg-white shadow-sm">
            <Navbar onSearch={onSearchEventHandler} />
          </header>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </QueryClientProvider>
      </SearchContext.Provider>
    </BrowserRouter>
  );
}

export default App;
