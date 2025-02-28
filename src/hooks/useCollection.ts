import liteflow from "@/lib/liteflow";
import { useQuery } from "@tanstack/react-query";

export default function useCollection(chainId: number, address: string) {
  return useQuery({
    queryFn: async () => {
      const res = await liteflow.collections.retrieve(chainId, address);
      if (res.error) throw new Error(res.error.message);
      return res.data;
    },
    queryKey: ["collection", { chainId, address }],
  });
}
