import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { BoardProvider } from './BoardContext';
import BoardPage from './pages/BoardPage';
import BoardDetail from './components/BoardDetail';

function App() {
  return (
    <BoardProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/board" />} />
          <Route path="/board" element={<BoardPage />} />
          <Route path="/boards/:id" element={<BoardDetail />} />
        </Routes>
      </Router>
    </BoardProvider>
  );
}

export default App;
