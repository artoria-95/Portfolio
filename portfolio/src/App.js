import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/index";
import About from "./Components/About/index";
import Projects from "./Components/Projects/index";
import "./App.css";
//import Routes from './routes';

function App() {
  return (
    <body>
      <div className="container">
      <Navbar/>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
      </div>
      
    </body>
  );
}

export default App;
