import React, { useState } from 'react';
import BoardForm from '../components/BoardForm';
import BoardList from '../components/BoardList';

function BoardPage() {
  const [boards, setBoards] = useState([]);

  const addBoard = (board) => {
    setBoards([...boards, { ...board, id: boards.length + 1 }]);
  };

  const deleteBoard = (id) => {
    setBoards(boards.filter(board => board.id !== id));
  };

  const updateBoard = (updatedBoard) => {
    setBoards(boards.map(board => board.id === updatedBoard.id ? updatedBoard : board));
  };

  return (
    <div>
      <h1>게시판</h1>
      <BoardForm onAddBoard={addBoard} />
      <BoardList boards={boards} onDelete={deleteBoard} />
    </div>
  );
}

export default BoardPage;
