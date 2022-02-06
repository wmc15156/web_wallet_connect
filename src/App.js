import logo from './logo.svg';
import './App.css';

import PriorityExample from '../src/components/connectors/PriorityExample';
import MetaMaskCard from '../src/components/connectors/MetaMaskCard';

function App() {
  return (
    <div>
      <PriorityExample />
      <div>
        <MetaMaskCard />
      </div>
    </div>
  );
}

export default App;
