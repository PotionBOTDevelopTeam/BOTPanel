import './sidebar.css'

const SideBar = ({ items, mode, sideBarShow }) => {
    return (<div className={mode}>
        <div className={`desktop_sidebar ${sideBarShow ? 'show' : 'noshow'}`}>
            {
                items.map(item => (
                    <div className={`desktop_item_container desktop_${item.buttomBorder ? 'with_buttom_border' : ''}`}>
                        <a href='https://youtu.be/dQw4w9WgXcQ'>
                            <div className={`desktop_sidebar_item desktop_${item.selected ? 'selected' : ''}`}>
                                <div className='desktop_icon' style={{ backgroundColor: item.iconBackgroundColor }}>
                                    <img alt={item.label} src={item.icon}></img>
                                </div>
                                <div className='desktop_label'>
                                    <b>{item.label}</b>
                                </div>
                            </div>
                        </a>
                    </div>))
            }
        </div>
    </div>)
}

export default SideBar