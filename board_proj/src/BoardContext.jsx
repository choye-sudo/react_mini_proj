import React, { createContext, useState, useEffect } from 'react';

// Context 생성
export const BoardContext = createContext();

// Provider 컴포넌트
export const BoardProvider = ({ children }) => {
  const [boards, setBoards] = useState(() => {
    const savedBoards = localStorage.getItem('boards');
    return savedBoards ? JSON.parse(savedBoards) : [];
  });

  // 상태가 변경될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('boards', JSON.stringify(boards));
  }, [boards]);

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
    <BoardContext.Provider value={{ boards, addBoard, deleteBoard, updateBoard }}>
      {children}
    </BoardContext.Provider>
  );
};
