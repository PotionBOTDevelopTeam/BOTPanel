import './sidebar_dark.css'
import './sidebar_light.css'

const SideBar = ({ items, mode, sideBarShow, userData, loggedIN }) => {
    return (<div className={mode}>
        <div className='desktop'>
            <div className='sidebar_container'>
                <div className={`sidebar ${sideBarShow ? 'show' : 'noshow'}`}>
                    <div className='sidebar_main_item_container'>
                        {
                            items.map(item => (
                                <div className={`item_container ${item.buttomBorder ? 'with_buttom_border' : ''}`}>
                                    <a href={item.redirectURL}>
                                        <div className={`sidebar_item ${item.selected ? 'selected' : ''}`}>
                                            <div className='icon' style={{ backgroundColor: item.iconBackgroundColor }}>
                                                <img alt={item.label} src={item.icon}></img>
                                            </div>
                                            <div className='label'>
                                                <b>{item.label}</b>
                                            </div>
                                        </div>
                                    </a>
                                </div>))
                        }
                    </div>
                    {userData.username ? (<div className='sidebar_footer_container'>
                        <div className="sidebar_footer">
                            <div className='banner' style={userData.banner ? { background: `url("https://cdn.discordapp.com/banners/${userData.id}/${userData.banner}") no-repeat center center / cover` } : { backgroundColor: userData.banner_color }}>
                                <div className='avatar'>
                                    <img alt={userData.username} src={`https://cdn.discordapp.com/avatars/${userData.id}/${userData.avatar}.png`}></img>
                                </div>
                            </div>
                            <div className='arrow_icon'>
                                <img alt="展開選單" src={`./icons/icon_arrow_${mode === 'dark' ? 'light' : 'dark'}.png`} />
                            </div>
                            <div className='username'>
                                <p><b>{userData.username ? userData.username : '載入中'}</b></p>
                                <p className='discriminator'>{userData.discriminator ? userData.discriminator === '0' ? undefined : `#${userData.discriminator}` : undefined}</p>
                            </div>
                        </div>
                        <div className="sidebar_footer_options logout">
                            <div className="sidebar_footer_option">
                                <a href="http://localhost/logout">
                                    <img alt="登出" src='./icons/icon_logout.png'></img>
                                    <p><b>登出</b></p>
                                </a>
                            </div>
                        </div>
                    </div>) : loggedIN ? (<div className='sidebar_footer_container'>
                        <div className="sidebar_footer">
                            <div className='banner' style={userData.banner ? { background: `url("./icon_discord_with_backdround.png") no-repeat center center / cover` } : { backgroundColor: userData.banner_color }}>
                                <div className='avatar'>
                                    <img alt={userData.username} src=""></img>
                                </div>
                            </div>
                            <div className='arrow_icon'>
                                <img alt="展開選單" src={`./icons/icon_arrow_${mode === 'dark' ? 'light' : 'dark'}.png`} />
                            </div>
                            <div className='username'>
                                <p><b>{userData.username ? userData.username : '載入中'}</b></p>
                                <p className='discriminator'>{userData.discriminator ? userData.discriminator === '0' ? undefined : `#${userData.discriminator}` : undefined}</p>
                            </div>
                        </div>
                        <div className="sidebar_footer_options logout">
                            <div className="sidebar_footer_option">
                                <a href="http://localhost/logout">
                                    <img alt="登出" src='./icons/icon_logout.png'></img>
                                    <p><b>登出</b></p>
                                </a>
                            </div>
                        </div>
                    </div>) : (<div className='sidebar_footer_container'>
                        <div className="sidebar_footer">
                            <div className='banner' style={userData.banner ? { background: `url("./icons/icon_discord_with_backdround.png") no-repeat center center / cover` } : { backgroundColor: userData.banner_color }}>
                                <div className='avatar'>
                                    <img alt={userData.username} src="./icons/icon_discord_with_background.png"></img>
                                </div>
                            </div>
                            <div className='arrow_icon'>
                                <img alt="展開選單" src={`./icons/icon_arrow_${mode === 'dark' ? 'light' : 'dark'}.png`} />
                            </div>
                            <div className='username'>
                                <p><b>使用Discord登入</b></p>
                            </div>
                        </div>
                        <div className="sidebar_footer_options login">
                            <div className="sidebar_footer_option">
                                <a href="http://localhost/login">
                                    <img alt="登入" src='./icons/icon_login.png'></img>
                                    <p><b>登入</b></p>
                                </a>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    </div>)
}

export default SideBar

//ff565d