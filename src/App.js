
import './App.css';
import Header from './components/Header';
import About from './components/About.js';
import Services from './components/Services';
import Projects from './components/Projects'
import Linkbox from './components/Linkbox'

function App() {
  return (
    <div className="App">
        <header className="App-header">

     
        <h1 class="myName">Lauren Larue Joyner</h1>
        <Header />

        </header>

        <img class="me" src="https://i.imgur.com/1psUqER.jpg" alt="Lauren Larue Joyner" />
      <About />
      <Services />
      <Projects />
      <Linkbox />

      <footer id="foot">©Lauren Joyner</footer>
    </div>
  );
}

export default App;
