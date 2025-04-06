import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@layouts/navbar";
import ProductList from "@layouts/product/ProductList";
import PageNotFound from "@layouts/not-found/PageNotFound";
import Details from "@layouts/product/Details";
import Cart from "@layouts/cart/Cart";
import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import SearchContext from "@utils/context/SearchContext";
import LandingPage from "@pages/LandingPage";
import { queryClient } from "@lib/queryClient";
import WebTemplate from "@layouts/web-template";

function App() {
  const [searchKeywords, setSearchKeywords] = useState("");

  const onSearchEventHandler = (event) => {
    return setSearchKeywords(event.target.value);
  };

  return (
    <BrowserRouter>
      <SearchContext.Provider value={searchKeywords}>
        <QueryClientProvider client={queryClient}>
          {/* <header className="sticky top-0 z-50 bg-white shadow-sm">
            <Navbar onSearch={onSearchEventHandler} />
          </header>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductList />} />
            <Route path="/products/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes> */}
          <Routes>
            <Route path="/" element={<WebTemplate />}>
              <Route index element={<LandingPage />} />
              <Route path="/products" element={<ProductList />} />
            </Route>
          </Routes>
        </QueryClientProvider>
      </SearchContext.Provider>
    </BrowserRouter>
  );
}

export default App;
