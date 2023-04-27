import Navbar from './components/navbar/Navbar';
import './components/hero/hero.css';
import HeroComponent from './components/hero/HeroComponent';
import CardList from './components/imageCard/CardList';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroComponent/>
      <CardList/>
    </div>
  );
}

export default App;
