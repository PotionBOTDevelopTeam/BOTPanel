import './header.css'

const Header = ({ mode, setMode, sideBarShow, setSideBarShow}) => {
    return (
    <header>
        <div className={mode}>
        <nav className="desktop_header">
            <div className="desktop_logo">
                <a href="https://youtu.be/dQw4w9WgXcQ">
                    <img alt="神奇的藥水..嗎" src="./logo_256.png"></img>
                    <h2>神奇的藥水..嗎</h2>
                </a>
            </div>
            <div className="desktop_nav_item desktop_sidebar_switch">
                <input type="checkbox" id="desktop_sidebar_switch" onChange={() => {
                    sideBarShow ? setSideBarShow(false) : setSideBarShow(true)
                }}></input>
                <label htmlFor='desktop_sidebar_switch'>
                    <img alt="開啟/關閉側邊欄" src={`./icons/icon_menu_${mode === 'light' ? 'dark' : 'light'}.png`}></img>
                </label>
            </div>
            <div className="desktop_navigator">
                <div className="desktop_nav_item desktop_light_dark">
                    <input type='checkbox' id="desktop_mode_switch" onChange={() => {
                        mode === 'light' ? setMode('dark') : setMode('light')
                    }
                    } />
                    <label htmlFor='desktop_mode_switch'>
                        <img alt="切換深色/淺色模式" src={`./icons/icon_${mode === 'light' ? 'dark' : 'bright'}_mode_${mode === 'light' ? 'dark' : 'light'}.png`} />
                    </label>
                </div>
                <div className="desktop_nav_item desktop_search">
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