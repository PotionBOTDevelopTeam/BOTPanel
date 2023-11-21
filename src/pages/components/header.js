import React, { useState } from 'react'

import './header.css'

const Header = () => {
    const [mode, setMode] = useState('light')

    return (<div className={mode}>
        <div className="header">
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
                        <img alt="切換深色/淺色模式" src={`./icons/icon_${mode === 'light' ? 'bright' : 'dark'}_mode_${mode === 'light' ? 'light' : 'dark'}.png`} />
                    </label>
                </div>
                <div className="nav_item search">
                    <a href="#search">
                        <img alt="搜尋" src={`./icons/icon_search_${mode === 'light' ? 'light' : 'dark'}.png`} />
                    </a>
                </div>
            </div>
        </div>
    </div>)
}

export default Header