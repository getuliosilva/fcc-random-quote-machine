import Container from 'react-bootstrap/Container'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container className="vh-100">
      <App />
    </Container>
  </React.StrictMode>
);
