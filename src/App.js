import logo from './logo.svg';
import './App.css';
import oleksandrImg from "./img/oleksandrAv.jpg";
import vladImg from "./img/vladAv.jpg";
import mariiaImg from "./img/mariiaAv.jpg";


function App() {
    return (
        <div className="App">
            <header>
                <h1>My dream team</h1>
            </header>
            <main>
                <div className="wrapp">
                    {/* Тут кожен додає свою картку вручну */}


                    <div className="card">
                        <img className="img" src={oleksandrImg} alt="Oleksandr" />
                        <h2>Krekhovetskyi O.V.</h2>
                        <p>Software Engineer</p>
                    </div>

                    <div className="card">
                        <img className="img" src={vladImg} alt="Vlad" />
                        <h2>Ostrovets V.M.</h2>
                        <p>Software Engineer</p>


                    </div>
                    <div className="card">
                        <h2>General Card B</h2>
                        <p>This is a general card created in branch B.</p>
                   </div>

                      <div className="card">
                        <img className="img" src={mariiaImg} alt="Mariia" />
                        <h2>Sydoruk M.V.</h2>
                        <p>Software Engineer</p>

                   </div>

                    </div>
                </div>
            </main>
        </div>
    );
}