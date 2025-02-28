import abi from "@/lib/abi";
import liteflow from "@/lib/liteflow";
import { GetDropsResponse } from "@liteflow/sdk/dist/client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Address, Hex } from "viem";
import { waitForTransactionReceipt } from "viem/actions";
import { useAccount, useClient, useSwitchChain, useWriteContract } from "wagmi";

export default function useMint(drop: GetDropsResponse["data"][number]) {
  const account = useAccount();
  const switchChain = useSwitchChain();
  const queryClient = useQueryClient();
  const client = useClient({ chainId: drop.chainId });
  const claimTx = useWriteContract();

  return useMutation({
    mutationFn: async (quantity: number) => {
      if (!client) return;
      if (!account.address) return;
      await switchChain.switchChainAsync({ chainId: drop.chainId });
      const claim = await liteflow.drops.claim(drop.id, {
        quantity,
        userAddress: account.address,
      });
      if (!claim.data) throw new Error("Invalid claim data");
      const hash = await claimTx.writeContractAsync({
        chainId: drop.chainId,
        abi: abi,
        functionName: "claim",
        address: drop.collectionAddress as Address,
        value: BigInt(claim.data.overrides.value),
        args: [
          claim.data.receiver as Address,
          BigInt(claim.data.quantity),
          claim.data.currency as Address,
          BigInt(claim.data.pricePerToken),
          {
            currency: claim.data.allowlistProof.currency as Address,
            pricePerToken: BigInt(claim.data.allowlistProof.pricePerToken),
            quantityLimitPerWallet: BigInt(
              claim.data.allowlistProof.quantityLimitPerWallet
            ),
            proof: claim.data.allowlistProof.proof as Hex[],
          },
          claim.data.data as Hex,
        ],
      });
      const receipt = await waitForTransactionReceipt(client, { hash });
      if (receipt.status === "reverted")
        throw new Error("Transaction reverted");
      await queryClient.invalidateQueries({
        refetchType: "all",
        queryKey: [
          "drops",
          {
            chainId: drop.chainId,
            collectionAddress: drop.collectionAddress,
            userAddress: account.address,
          },
        ],
      });
      return hash;
    },
  });
}
