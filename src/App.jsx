import './App.css';
import './styles/utils.css';
import socketIOClient from 'socket.io-client';
import { useEffect, useState } from 'react';

const ENDPOINT = 'http://127.0.0.1:8089';

function App() {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    console.log('wut');
    socket.on('FromAPI', (data) => {
      setResponse(data);
    });
    // CLEAN UP THE EFFECT
    return () => socket.disconnect();
  }, []);

  const handleEmmit = () => {
    console.log('emit');
    const socket = socketIOClient(ENDPOINT);
    socket.emit('eventA', 1000);
  };

  return (
    <div>
      <h1>{ `hola   ${response} holaaaaa` }</h1>
      <button onClick={handleEmmit} type="button">Emite</button>
      <div className="card-container">
        <div className="card-item">
          <figure>
            <img src={`${process.env.PUBLIC_URL}/assets/rock.png`} alt="" className="w-100" />
          </figure>
          <h2 className="text-center">Rock</h2>
        </div>
        <div className="card-item">
          <figure>
            <img src={`${process.env.PUBLIC_URL}/assets/paper.png`} alt="" className="w-100" />
          </figure>
          <h2 className="text-center">Paper</h2>
        </div>
        <div className="card-item">
          <figure>
            <img src={`${process.env.PUBLIC_URL}/assets/scissors.png`} alt="" className="w-100" />
          </figure>
          <h2 className="text-center">Scissors</h2>
        </div>
      </div>

    </div>
  );
}

export default App;
