import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';  // CSS가 필요 없다면 이 줄을 제거해도 됩니다.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
