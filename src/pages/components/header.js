import React, { useState } from 'react'

import './header.css'

const Header = () => {
    const [mode, setMode] = useState('dark')

    return (
    <header>
        <div className={mode}>
        <nav className="header">
            <div className="logo">
                <a href="https://youtu.be/dQw4w9WgXcQ">
                    <img alt="神奇的藥水..嗎" src="./logo_256.png"></img>
                    <h2>神奇的藥水..嗎</h2>
                </a>
            </div>
            <div className="navigator">
                <div className="nav_item light_dark">
                    <input type='checkbox' id="mode_switch" onChange={() => {
                        mode === 'light' ? setMode('dark') : setMode('light')
                        console.log(mode)
                    }
                    } />
                    <label htmlFor='mode_switch'>
                        <img alt="切換深色/淺色模式" src={`./icons/icon_${mode === 'light' ? 'dark' : 'bright'}_mode_${mode === 'light' ? 'dark' : 'light'}.png`} />
                    </label>
                </div>
                <div className="nav_item search">
                    <a href="https://youtu.be/dQw4w9WgXcQ">
                        <img alt="搜尋" src={`./icons/icon_search_${mode === 'light' ? 'dark' : 'light'}.png`} />
                    </a>
                </div>
            </div>
        </nav>
    </div>
    </header>)
}

export default Header