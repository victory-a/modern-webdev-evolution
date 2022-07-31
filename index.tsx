import * as React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function App() {
  const [count, setCount] = React.useState<number>(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{count}</h1>
    </>
  );
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
