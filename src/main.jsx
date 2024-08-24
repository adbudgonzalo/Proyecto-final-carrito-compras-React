import React from 'react';
import ReactDOM from 'react-dom/client'; // Cambié a 'react-dom/client'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CarritoApp } from './CarritoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <React.StrictMode>
            <CarritoApp />
        </React.StrictMode>
    </BrowserRouter>,
);
