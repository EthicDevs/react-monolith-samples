import React, { CSSProperties, useCallback, useState } from "react";
import type { ReactIsland } from "@ethicdevs/react-monolith";

// app
import { Button } from "../components";

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
      <Button
        onClick={decrementCounter}
        type={"button"}
        title={"Click to Decrement"}
      >
        Decrement
      </Button>
      <div style={styles.counterText}>{counter}</div>
      <Button
        onClick={incrementCounter}
        type={"button"}
        title={"Click to Increment"}
      >
        Increment
      </Button>
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
  counterText: {
    padding: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
};

export default Counter;
