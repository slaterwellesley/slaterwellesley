import './App.css';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import Gallery from './components/Gallery';
import Statistics from './components/Statistics';
import EBoard from './components/EBoard';
import LetsConnect from './components/LetsConnect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <AboutUs />
      <Gallery />
      <Statistics />
      <EBoard />
      <LetsConnect />
    </div>
  );
}

export default App;
