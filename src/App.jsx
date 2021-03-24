import './App.css';
import './styles/utils.css';

function App() {
  return (
    <div>
      <h1>holaaaaaaaa</h1>
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
