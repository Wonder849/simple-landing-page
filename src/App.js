import logo from './logo.svg';
import './App.css';
import oleksandrImg from "./img/oleksandrAv.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <h1>My dream team</h1>
      </header>
      <main>
        <div className ="wrapp">
          {/* Тут кожен додає свою картку вручну */}

          <div className="card">
            <img className="img" src={oleksandrImg} alt="Oleksandr"/>
            <h2>Krekhovetskyi O.V.</h2>
            <p>Software Engineer</p>
            <p>^_^</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
