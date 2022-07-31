import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";

function App() {
  const [count, setCount] = React.useState(0);

  return React.createElement('div', {}, [
    React.createElement(
      'button',
      {
        onClick: () => setCount(count + 1),
      },
      'Increment'
    ),
    React.createElement('h1', {}, count),
  ]);
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
