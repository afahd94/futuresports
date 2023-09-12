import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import NewsPage from './components/NewsPage/NewsPage';
import SchedulePage from './components/SchedulePage/SchedulePage';
import PlayersPage from './components/PlayersPage/PlayersPage';
import ContactUsPage from './components/ContactUsPage/ContactUsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/players" element={<PlayersPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




