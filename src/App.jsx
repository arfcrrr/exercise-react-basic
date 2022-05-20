import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home, About, Products, RandomUser } from './pages';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="/about" element={<About />}>
        </Route>
        <Route path="/random-user" element={<RandomUser />}>
        </Route>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
