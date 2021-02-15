import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/index";
import About from "./Components/About/index";
import "./App.css";
//import Routes from './routes';

function App() {
  return (
    <body>
      <div className="container">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
      </div>
      <Navbar/>
    </body>
  );
}

export default App;
