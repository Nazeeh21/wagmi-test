import { useContractWrite } from "wagmi";

interface TxnButtonProps {
  address: string;
  abi: string;
  functionName: string;
  children?:
    | React.ReactNode
    | ((state: {
        isLoading: boolean;
        isSuccess: boolean;
        data: any;
      }) => React.ReactNode);
}

export const TxnButtonV1: React.FC<TxnButtonProps> = ({
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
      {/* user can access all the states from useContracthook */}
      {typeof children === "function"
        ? children({ isLoading, isSuccess, data })
        : children}
    </>
  );
};
