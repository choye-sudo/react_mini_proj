import React, { useContext } from 'react';
import { BoardContext } from '../BoardContext';
import BoardForm from '../components/BoardForm';
import BoardList from '../components/BoardList';

function BoardPage() {
  const { boards, addBoard, deleteBoard } = useContext(BoardContext);

  return (
    <div>
      <h1>게시판</h1>
      <BoardForm onAddBoard={addBoard} />
      <BoardList boards={boards} onDelete={deleteBoard} />
    </div>
  );
}

export default BoardPage;
