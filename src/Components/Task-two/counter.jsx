import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="w-[300px] h-[300px] bg-[#344353] text-white flex flex-col justify-center text-center">
            <h1>😊{count}</h1>

            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => count > 0 && setCount(count - 1)}>decrease</button>

            {count === 10 && (
                <p>Counter 10 ho gaya!</p>
            )}
        </div>
    );
}

export default Counter;
