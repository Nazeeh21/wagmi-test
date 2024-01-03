import Image from "next/image";
import styles from "./page.module.css";
import { TxnButtonV1 } from "@/components/TxnButtonV1";
import { TxnButtonV2 } from "@/components/TxnButtonV2";

export default function Home() {
  return (
    <main className={styles.main}>
      <TxnButtonV1 address="0x0" functionName="approve" abi="abi">
        {({ isLoading, isSuccess, data }) => {
          return (
            <div>
              {isLoading && <div>Check Wallet</div>}
              {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
            </div>
          );
        }}
      </TxnButtonV1>
      <TxnButtonV2 address="0x0" functionName="approve" abi="abi" />
    </main>
  );
}
