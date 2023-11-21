import './sidebar.css'

const SideBar = ({ items }) => {
    return (<div className="sidebar">
        {
            items.map(item => (
                <div className='item_container'>
                    <a href='https://youtu.be/dQw4w9WgXcQ'>
                        <div className='sidebar_item'>
                            <div className='icon'>
                                <img alt={item.label} src={item.icon}></img>
                            </div>
                            <div className='label'>
                                <b>{item.label}</b>
                            </div>
                        </div>
                    </a>
                </div>))
        }
    </div>)
}

export default SideBar