import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  let name = 'React!!';
  let bool = true;
  const style = {
    color: 'red',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return (
    <>
      <div className="container">
        {bool == true ? <h1 className="testCss">hello {name}</h1> : <h1 className="testCss">hello wrold</h1>}
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      {/*주석*/}
      <h2 style={style}>That is testText</h2>
      <h2
        style={{
          color: 'red',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        Test text
      </h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
