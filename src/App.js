import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './pages/FrontPage/FrontPage';
import MenPage from './pages/men/MenPage/MenPage';
import WomenPage from './pages/women/WomenPage/WomenPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/men" element={<MenPage />} />
      <Route path="/women" element={<WomenPage />} />
    </Routes>
  );
}

export default App;
