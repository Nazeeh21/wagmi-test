import { useContractWrite } from "wagmi";

interface TxnButtonProps {
  address: string;
  abi: string;
  functionName: string;
  children?: React.ReactNode;
}

export const TxnButtonV2: React.FC<TxnButtonProps> = ({
  address,
  abi,
  functionName,
  children,
}) => {
  const { isLoading, isSuccess, data, write } = useContractWrite({
    address,
    abi,
    functionName,
  });
  return (
    <>
      <button disabled={!write || isLoading} onClick={() => write?.()}>
        {isLoading ? "Loading..." : "Transact"}
      </button>
      {children}
    </>
  );
};
