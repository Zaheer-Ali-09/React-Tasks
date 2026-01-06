import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-[320px] bg-gradient-to-br from-[#1f2933] to-[#111827] 
    text-white  shadow-xl flex flex-col justify-center items-center gap-4">

      <h1 className="text-5xl font-bold">
        😊 {count}
      </h1>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-5 py-2 bg-green-500 hover:bg-green-600 rounded-lg"
        >
           Increase
        </button>

        <button
          onClick={() => count > 0 && setCount(count - 1)}
          className="px-5 py-2 bg-red-500 hover:bg-red-600 rounded-lg"
        >
           Decrease
        </button>
      </div>

      {count === 10 && (
        <p className="text-yellow-400 font-semibold animate-pulse">
           Counter 10 ho gaya!
        </p>
      )}
    </div>
  );
}

export default Counter;
