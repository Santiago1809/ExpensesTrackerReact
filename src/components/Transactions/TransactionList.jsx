import { useGlobalState } from "../../context/GlobalContext";
import TransactionItem from "./TransactionItem";
export default function TransactionList() {
  const { transactions } = useGlobalState();
  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold block w-full">History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
}
