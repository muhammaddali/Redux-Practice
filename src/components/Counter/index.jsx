// src/features/counter/Counter.js
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  reset,
} from "../../features/Counter/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className=" flex items-center justify-center p-4 mt-4 md:mt-34">
      <div className=" rounded-2xl shadow-xl p-8 max-w-sm w-full bg-gray-800">
        <div className="flex justify-center items-center mb-6">
          <h1 className="text-4xl font-bold ">
            Counter: <span className="text-blue-600">{count}</span>
          </h1>
        </div>

        <div className="flex justify-center items-center gap-4">
          {/* Decrement Button */}
          <button
            onClick={() => dispatch(decrement())}
            className="p-3 rounded-full bg-red-500 cursor-pointer text-white hover:bg-red-600 focus:ring-4 focus:ring-red-200 transition-all duration-200"
            aria-label="Decrement counter"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={() => dispatch(reset())}
            className="p-3 rounded-full bg-blue-500 cursor-pointer text-white hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 transition-all duration-200"
            aria-label="Reset counter"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C9.13519 3 6.59348 4.29367 4.875 6.375M12 8V12L15 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={() => dispatch(increment())}
            className="p-3 rounded-full bg-green-500 cursor-pointer text-white hover:bg-green-600 focus:ring-4 focus:ring-green-200 transition-all duration-200"
            aria-label="Increment counter"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
