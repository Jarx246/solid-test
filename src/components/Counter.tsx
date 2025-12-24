import { createSignal } from "solid-js";
// import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <>
      <button
        class="increment"
        onClick={() => setCount(count() + 1)}
        type="button"
      >
        Clicks: {count()}
      </button>
      <style jsx dynamic>
        {`
          .increment {
            font-family: inherit;
            font-size: inherit;
            padding: 1em 2em;
            color: #335d92;
            background-color: rgba(68, 107, 158, 0.1);
            border-radius: 2em;
            border: 2px solid rgba(68, 107, 158, 0);
            outline: none;
            width: 200px;
            font-variant-numeric: tabular-nums;
            cursor: pointer;
          }

          .increment:focus {
            border: 2px solid #335d92;
          }

          .increment:active {
            background-color: rgba(68, 107, 158, 0.2);
          }
        `}
      </style>
    </>
  );
}
