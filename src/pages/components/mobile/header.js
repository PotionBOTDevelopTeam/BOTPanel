import './header.css'

const Header = ({ mode, setMode,sideBarShow, setSideBarShow }) => {
    return (
    <header>
        <div className={mode}>
        <nav className="mobile_header">
            <div className="mobile_logo">
                <a href="https://youtu.be/dQw4w9WgXcQ">
                    <img alt="神奇的藥水..嗎" src="./logo_256.png"></img>
                    <h2>神奇的藥水..嗎</h2>
                </a>
            </div>
            <div className="mobile_nav_item mobile_sidebar_switch">
                <input type="checkbox" id="mobile_sidebar_switch" onChange={() => {
                    sideBarShow ? setSideBarShow(false) : setSideBarShow(true)
                }}></input>
                <label htmlFor='mobile_sidebar_switch'>
                    <img alt="開啟/關閉側邊欄" src={`./icons/icon_menu_${mode === 'light' ? 'dark' : 'light'}.png`}></img>
                </label>
            </div>
            <div className="mobile_navigator">
                <div className="mobile_nav_item mobile_light_dark">
                    <input type='checkbox' id="mobile_mode_switch" onChange={() => {
                        mode === 'light' ? setMode('dark') : setMode('light')
                    }
                    } />
                    <label htmlFor='mobile_mode_switch'>
                        <img alt="切換深色/淺色模式" src={`./icons/icon_${mode === 'light' ? 'dark' : 'bright'}_mode_${mode === 'light' ? 'dark' : 'light'}.png`} />
                    </label>
                </div>
                <div className="mobile_nav_item mobile_search">
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