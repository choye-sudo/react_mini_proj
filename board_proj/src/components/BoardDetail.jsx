import React, { useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BoardContext } from '../BoardContext';

function BoardDetail() {
  const { id } = useParams();
  const { boards, updateBoard, deleteBoard } = useContext(BoardContext);
  const board = boards.find(b => b.id === Number(id));
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(board ? board.title : '');
  const [content, setContent] = useState(board ? board.content : '');

  if (!board) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  const handleUpdate = () => {
    updateBoard({ id: board.id, title, content });
    setIsEditing(false);
    navigate('/board');
  };

  const handleDelete = () => {
    deleteBoard(board.id);
    navigate('/board');
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleUpdate}>저장</button>
        </div>
      ) : (
        <div>
          <h2>{board.title}</h2>
          <p>{board.content}</p>
          <button onClick={() => setIsEditing(true)}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      )}
    </div>
  );
}

export default BoardDetail;
