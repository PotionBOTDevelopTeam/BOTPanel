import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './pages/components/header';
import SideBar from './pages/components/sidebar'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div className='main'>
		    <Header />
            <SideBar items={[{ icon: 'https://cdn-icons-png.flaticon.com/512/3962/3962020.png', label: '選擇伺服器' }]}/>   
        </div>
    </React.StrictMode>
);