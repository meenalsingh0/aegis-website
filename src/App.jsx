import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <div className="h-16"></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;