import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';

function BoardDetail({ onUpdateBoard, onDeleteBoard }) {
  const { id } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const board = state?.board;
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(board ? board.title : '');
  const [content, setContent] = useState(board ? board.content : '');

  if (!board) {
    return <div>게시글을 찾을 수 없습니다.</div>;
  }

  const handleUpdate = () => {
    onUpdateBoard({ id: board.id, title, content });
    setIsEditing(false);
    navigate('/board');
  };

  const handleDelete = () => {
    onDeleteBoard(board.id);
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
