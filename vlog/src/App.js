import React, { useEffect, useState } from "react";
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';

function App() {
  const [serverData, setServerData] = useState('');

  const callServer = async () => {
    axios.get('/api').then((res) => { setServerData(res.data.test) });
  };

  useEffect(() => {
    callServer();
  }, []);

  return (
    <div>
      <b>Hello</b>
      <div>
        What you want is {serverData}!
      </div>

    </div>

  );
}

export default App;
