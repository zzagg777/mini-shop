import { useQuery } from "@tanstack/react-query";
import { productApi, ProductsQuery } from "@/utils/api";

export function useProducts(query: ProductsQuery = {}) {
  return useQuery({
    queryKey: ["products", query],
    queryFn: () => productApi.getAll(query),
  });
}
