import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import search from './components/search';
import { useGlobalContext } from './context/context';

function App() {
  const data = useGlobalContext();
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h3>Result { data }</h3>
      <search />
    </>
  )
}

export default App
