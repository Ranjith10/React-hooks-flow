import React, { useState, useEffect } from "react";
import "./styles.css";

const App = () => {
  console.log("Parent rendering starts");

  const [showChild, setShowChild] = useState(() => {
    console.log("Parent useState Hook");
    return false;
  });

  useEffect(() => {
    console.log("Parent useEffect without deps");
    return () => {
      console.log("Parent useEffect without deps - Cleanup");
    };
  });

  useEffect(() => {
    console.log("Parent useEffect with empty deps");
    return () => {
      console.log("Parent useEffect with empty deps - Cleanup");
    };
  }, []);

  useEffect(() => {
    console.log("Parent useEffect with deps");
    return () => {
      console.log("Parent useEffect with deps - Cleanup");
    };
  }, [showChild]);

  return (
    <>
      <div>
        <input
          type="checkbox"
          checked={showChild}
          onChange={e => setShowChild(e.target.checked)}
        />
        Show Child
      </div>
      {showChild ? <ChildComponent /> : null}
      {console.log("Parent rendering Ends")}
    </>
  );
};

const ChildComponent = props => {
  console.log("Child rendering starts");
  const [count, setCount] = useState(() => {
    console.log("Child useState Hook");
    return 0;
  });

  return (
    <>
      <button
        style={{ height: 30, width: 30 }}
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
      {console.log("Child rendering Ends")}
    </>
  );
};

export default App;
