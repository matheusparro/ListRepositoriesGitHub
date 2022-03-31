import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {UsersProvider} from '../src/Contexts/UserContext'
import "./global.css";
import { ToastContainer } from 'react-toastify';
ReactDOM.render(
  <React.StrictMode>
    <UsersProvider>
    <App />
    </UsersProvider>
    <ToastContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);

