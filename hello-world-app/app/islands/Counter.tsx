import React, { CSSProperties, useCallback, useState } from "react";
import type { ReactIsland } from "@ethicdevs/react-monolith";

interface CounterProps {
  defaultValue?: number;
}

const Counter: ReactIsland<CounterProps> = ({ defaultValue = 42 }) => {
  const [counter, setCounter] = useState(defaultValue);
  const incrementCounter = useCallback(
    () => setCounter((prev) => prev + 1),
    [setCounter]
  );
  const decrementCounter = useCallback(
    () => setCounter((prev) => prev - 1),
    [setCounter]
  );

  return (
    <div style={styles.counterContainer}>
      <button
        onClick={decrementCounter}
        type={"button"}
        title={"Click to Decrement"}
        style={styles.counterButton}
      >
        Decrement
      </button>
      <div style={styles.counterText}>{counter}</div>
      <button
        onClick={incrementCounter}
        type={"button"}
        title={"Click to Increment"}
        style={styles.counterButton}
      >
        Increment
      </button>
    </div>
  );
};

const styles: Record<string, CSSProperties> = {
  counterContainer: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    alignItems: "center",
    fontFamily: "monospace",
  },
  counterButton: {
    minHeight: 48,
    padding: "8px 12px",
    borderImage: "none",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "gray",
    borderRadius: 24,
    fontSize: 16,
    fontWeight: "bold",
  },
  counterText: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
};

export default Counter;
