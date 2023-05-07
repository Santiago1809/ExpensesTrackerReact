import { useGlobalState } from "../context/GlobalContext";

export default function IncomeExpenses() {
  const { transactions } = useGlobalState();

  const Amount = transactions.map((transaction) => transaction.amount);

  const ingresos = Amount.filter((a) => a > 0).reduce(
    (acc, item) => (acc += item),
    0
  ).toFixed(2);
  const gastos = Amount.filter((a) => a < 0).reduce(
    (acc, item) => (acc -= item),
    0
  ).toFixed(2);

  return (
    <>
      <div className="flex justify-between my-2">
        <h4>Income</h4>
        <p>{ingresos}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4>Expenses</h4>
        <p>{gastos}</p>
      </div>
    </>
  );
}
