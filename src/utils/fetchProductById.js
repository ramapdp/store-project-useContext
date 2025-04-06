const fetchProductById = async (id) => {
   const apiRes = await fetch(`https://my-json-server.typicode.com/ramapdp/db-products-json/products?id=${id}`);

   if (!apiRes.ok) {
      throw new Error(`Failed to fetch product ${id}`);
   }

   return apiRes.json();
};

export default fetchProductById;