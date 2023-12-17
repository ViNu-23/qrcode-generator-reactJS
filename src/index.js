import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';

function Main() {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);