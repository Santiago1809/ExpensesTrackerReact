import { useState } from "react";
import { useGlobalState } from "../../context/GlobalContext";
export default function TransactionForm() {
  const [description, setDescription] = useState();
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useGlobalState();

  function onSubmit(e) {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount
    });
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter a description"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <input
          type="number"
          placeholder="00.00"
          step="0.01"
          onChange={(e) => setAmount(parseFloat(e.target.value))}
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">Add transaction</button>
      </form>
    </div>
  );
}
