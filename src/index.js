import React from 'react';
import ReactDOM from 'react-dom/client';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import './index.css';
import App from './App';

const options = {
    // you can also just use 'bottom center'
    position: positions.MIDDLE_RIGHT,
    timeout: 3000,
    offset: '40px',
    // you can also just use 'scale'
    transition: transitions.SCALE
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);

