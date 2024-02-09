import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import explorer from './data/data';
import FolderData from './components/FolderData';

function App() {
  const [explorerData,setExplorerData]=useState(explorer)
  return (
    <div className="App">
          <FolderData explorerData={explorerData}/>
    </div>
  );
}

export default App;
