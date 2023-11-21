import './sidebar.css'

const SideBar = ({ items }) => {
    return (<div className="sidebar">
        {
            items.map(item => (
                <div className='item_container'>
                    <div className='sidebar_item'>
                        <div className='icon'>
                            <img alt={item.label} src={item.icon}></img>
                        </div>
                        <div className='label'>
                            <b><a href='https://youtu.be/dQw4w9WgXcQ'>{item.label}</a></b>
                        </div>
                    </div>
                </div>))
        }
    </div>)
}

export default SideBar