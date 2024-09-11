import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import BoardPage from './pages/BoardPage';
import BoardDetail from './components/BoardDetail';

function App() {
  const [boards, setBoards] = useState([]);

  const addBoard = (board) => {
    const newBoards = [...boards, { ...board, id: boards.length + 1 }];
    setBoards(newBoards);
  };

  const deleteBoard = (id) => {
    const newBoards = boards.filter(board => board.id !== id);
    setBoards(newBoards);
  };

  const updateBoard = (updatedBoard) => {
    const newBoards = boards.map(board => board.id === updatedBoard.id ? updatedBoard : board);
    setBoards(newBoards);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/board" />} />
        <Route 
          path="/board" 
          element={<BoardPage boards={boards} onAddBoard={addBoard} onDeleteBoard={deleteBoard} />} 
        />
        <Route 
          path="/boards/:id" 
          element={<BoardDetail boards={boards} onUpdateBoard={updateBoard} onDeleteBoard={deleteBoard} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
