import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './pages/FrontPage/FrontPage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
    </Routes>
  );
}

export default App;
