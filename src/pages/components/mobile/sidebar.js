import './sidebar.css'

const SideBar = ({ items, mode, sideBarShow }) => {
    return (<div className={mode}>
        <div className={`mobile_sidebar ${sideBarShow ? 'show' : 'noshow'}`}>
            {
                items.map(item => (
                    <div className={`mobile_item_container mobile_${item.buttomBorder ? 'with_buttom_border' : ''}`}>
                        <a href='https://youtu.be/dQw4w9WgXcQ'>
                            <div className={`mobile_sidebar_item mobile_${item.selected ? 'selected' : ''}`}>
                                <div className='mobile_icon' style={{ backgroundColor: item.iconBackgroundColor }}>
                                    <img alt={item.label} src={item.icon}></img>
                                </div>
                                <div className='mobile_label'>
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