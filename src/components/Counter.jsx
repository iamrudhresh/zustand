"use client";

import useCounterStore from "./../store.js";

export default function Counter() {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <div className="flex flex-col items-center gap-4 p-5 border rounded-lg shadow-lg">
      <h1 className="text-2xl text-black font-bold">Counter: {count}</h1>
      <div className="flex gap-2">
        <button onClick={increase} className="px-4 py-2 bg-green-500 text-white rounded-md">Increase</button>
        <button onClick={decrease} className="px-4 py-2 bg-red-500 text-white rounded-md">Decrease</button>
        <button onClick={reset} className="px-4 py-2 bg-gray-500 text-white rounded-md">Reset</button>
      </div>
    </div>
  );
}
