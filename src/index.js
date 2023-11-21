import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './pages/components/header';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className='main'>
		    <Header />
        </div>
    </React.StrictMode>
);