import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function BoardList({ boards, onDelete }) {
  const navigate = useNavigate();

  const handleClick = (board) => {
    navigate(`/boards/${board.id}`, { state: { board } });
  };

  return (
    <ul>
      {boards.map(board => (
        <li key={board.id}>
          <button onClick={() => handleClick(board)}>{board.title}</button>
          <button onClick={() => onDelete(board.id)}>삭제</button>
        </li>
      ))}
    </ul>
  );
}

export default BoardList;
