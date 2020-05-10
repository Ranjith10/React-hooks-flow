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
      <div
        style={{
          height: 100,
          width: 100,
          background: "lightBlue"
        }}
      >
        {showChild ? <ChildComponent /> : null}
      </div>
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

  useEffect(() => {
    console.log("Child useEffect without deps");
    return () => {
      console.log("Child useEffect without deps - Cleanup");
    };
  });

  useEffect(() => {
    console.log("Child useEffect with empty deps");
    return () => {
      console.log("Child useEffect with empty deps - Cleanup");
    };
  }, []);

  useEffect(() => {
    console.log("Child useEffect with deps");
    return () => {
      console.log("Child useEffect with deps - Cleanup");
    };
  }, [count]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        style={{
          height: 30,
          width: 30,
          display: "flex",
          justifyContent: "center",
          marginTop: 30
        }}
        onClick={() => setCount(count + 1)}
      >
        {count}
      </button>
      {console.log("Child rendering Ends")}
    </div>
  );
};

export default App;
