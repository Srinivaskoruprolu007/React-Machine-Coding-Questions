import { useState } from "react";

// interface for CounterProps
interface CounterProps {
  initialCount: number;
}
const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  //   function to implement Counter
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };

  const reset = () => {
    setCount(initialCount);
  };
  return (
    <div className="flex flex-col items-center p-4 border rounded-lg shadow-lg w-64 bg-white">
      <h2 className="text-2xl font-semibold mb-4">Counter</h2>
      <p className="text-4xl font-bold mb-4">{count}</p>
      <div className="flex justify-center space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={increment}
        >
          +
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={decrement}
        >
          -
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
