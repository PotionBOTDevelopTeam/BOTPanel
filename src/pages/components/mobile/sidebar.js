import './sidebar_dark.css'
import './sidebar_light.css'

const SideBar = ({ items, mode, sideBarShow, userData }) => {
    return (<div className={mode}>
        <div className='mobile'>
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
                    <div className='sidebar_footer_container'>
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
                                <p><b>{userData.username}</b></p>
                                <p className='discriminator'>{userData.discriminator === '0' ? undefined : `#${userData.discriminator}`}</p>
                            </div>
                        </div>
                        <div className="sidebar_footer_options">
                            <a href="http://localhost/logout">
                                <img alt="登出" src='./icons/icon_logout.png'></img>
                                <p><b>登出</b></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default SideBar