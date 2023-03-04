import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Services from './components/Services';
import './styles/App.scss';
import './styles/Color.scss';
import './styles/Mediaquery.scss';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Services' element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
