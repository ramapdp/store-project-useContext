import { useQuery } from '@tanstack/react-query';

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await fetch(
        import.meta.env.VITE_API_URL + '/products'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      return response.json();
    }
  });
}
