import './sidebar_dark.css'
import './sidebar_light.css'

const SideBar = ({ items, mode, sideBarShow }) => {
    return (<div className={mode}>
        <div className="mobile">
            <div className={`sidebar ${sideBarShow ? 'show' : 'noshow'}`}>
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
        </div>
    </div>)
}

export default SideBar