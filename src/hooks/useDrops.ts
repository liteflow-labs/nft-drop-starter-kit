import liteflow from "@/lib/liteflow";
import { useQuery } from "@tanstack/react-query";

export default function useDrops(
  chainId: number,
  collectionAddress: string,
  userAddress: string | undefined
) {
  return useQuery({
    queryFn: async () => {
      const res = await liteflow.drops.list({
        chainId,
        collectionAddress,
        userAddress,
      });
      if (res.error) throw new Error(res.error.message);
      return res.data;
    },
    queryKey: ["drops", { chainId, collectionAddress, userAddress }],
  });
}
