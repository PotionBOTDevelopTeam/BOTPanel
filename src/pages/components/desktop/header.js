import './header_light.css'
import './header_dark.css'

const Header = ({ mode, setMode, sideBarShow, setSideBarShow }) => {
    return (
        <header>
            <div className={mode}>
                <div className="desktop">
                    <nav className="header">
                        <div className="nav_item sidebar_switch">
                            <input type="checkbox" id="sidebar_switch" onChange={() => {
                                sideBarShow ? setSideBarShow(false) : setSideBarShow(true)
                            }}></input>
                            <label htmlFor='sidebar_switch'>
                                <img alt="開啟/關閉側邊欄" src={`./icons/icon_menu_${mode === 'light' ? 'dark' : 'light'}.png`}></img>
                            </label>
                        </div>
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
            </div>
        </header>)
}

export default Header