import React, { useState } from "react";
import ReactDOM from "react-dom";

interface AppProps {
  title: string;
}

const App = (props: AppProps): JSX.Element => {
  const { title } = props;
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h3>Henry Workshop - {title}</h3>
      <hr />
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrenent</button>
      <br />
      <span>{counter}</span>
    </div>
  );
};

ReactDOM.render(<App title="TypeScript" />, document.querySelector("#root"));
