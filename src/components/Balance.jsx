import { useGlobalState } from "../context/GlobalContext";
export default function Balance() {
  const { transactions } = useGlobalState();
  const amounts = transactions.map((tr)=>tr.amount)
  const total = amounts.reduce((acc, amount)=>(acc + amount), 0).toFixed(2);
  return (
    <div className="flex justify-between">
      <h1>Your Balance</h1>
      <h3 className="text-2xl font-bold">${total}</h3>
    </div>
  );
}
