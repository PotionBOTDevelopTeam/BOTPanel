import './sidebar_effect_dark.css'
import './sidebar_effect_light.css'

const SideBarEffect = ({ mode, sideBarShow }) => {
    return (<div className={`sidebar_effect_${mode}`}><div className={sideBarShow ? 'show' : 'noshow'}></div></div>)
}

export default SideBarEffect