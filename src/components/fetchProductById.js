const fetchProduct = async ({ queryKey }) => {
   const id = queryKey[1];
   const apiRes = await fetch(`https://my-json-server.typicode.com/ramapdp/db-products-json/products?id=${id}`);

   if (!apiRes.ok) {
      throw new Error(`details/${id} fetch not ok`);
   }

   return apiRes.json();
};

export default fetchProduct;