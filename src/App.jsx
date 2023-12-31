import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import PageNotFound from "./components/PageNotFound";
import Details from "./components/Details";
import Cart from "./components/Cart";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchContext from "./components/SearchContext";

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
          <header>
            <Navbar onSearch={onSearchEventHandler} />
          </header>
          <Routes>
            <Route path="/" element={<ProductList />} />
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
