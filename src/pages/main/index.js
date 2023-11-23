import React, { useEffect, useState } from 'react'
import jscookie from 'js-cookie'
import DesktopHeader from '../components/desktop/header'
import DesktopSideBar from '../components/desktop/sidebar'
import MobileHeader from '../components/mobile/header'
import MobileSideBar from '../components/mobile/sidebar'
import './index.css'
import MainContainer from './components/maincontainer'
import SideBarEffect from '../components/mobile/sidebarEffect'

const MainPage = () => {
    const [mode, setMode] = useState(jscookie.get('theme') === 'light' ? 'light' : 'dark')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [mobileMode, setMobileMode] = useState(windowWidth < 768)
    const [sideBarShow, setSideBarShow] = useState(!mobileMode)

    useEffect(() => {
        let theme = jscookie.get('theme')
        if (theme === '') {
            jscookie.set('theme', 'dark')
        }
        window.addEventListener('resize', (event) => {
            setWindowWidth(window.innerWidth)
        })
    }, [])

    useEffect(() => {
        jscookie.set('theme', mode)
    }, [mode])

    useEffect(() => {
        if (mobileMode !== (windowWidth < 768)) {
            setMobileMode(windowWidth < 768)
            setSideBarShow(!(windowWidth < 768))
        }
    }, [mobileMode, windowWidth])

    return (mobileMode ? (<div>
        <MobileHeader mode={mode} setMode={setMode} sideBarShow={sideBarShow} setSideBarShow={setSideBarShow} />
        <MobileSideBar items={[
            {
                icon: `./icons/icon_server_${mode === 'light' ? 'dark' : 'light'}.png`,
                label: '選擇伺服器',
                buttomBorder: true,
                iconBackgroundColor: (mode === 'light' ? '#FFF' : '#123'),
                selected: true,
                redirectURL: 'https://youtu.be/dQw4w9WgXcQ'
            },
            {
                icon: `./icons/icon_invite.png`,
                label: '邀請機器人',
                buttomBorder: false,
                iconBackgroundColor: 'rgba(113, 136, 254, 0.3)',
                selected: false,
                redirectURL: 'https://discord.com/api/oauth2/authorize?client_id=906525606177566830&permissions=8&scope=bot%20applications.commands'
            }
        ]} mode={mode} sideBarShow={sideBarShow} />
        <SideBarEffect mode={mode} sideBarShow={sideBarShow}/>
        <MainContainer mode={mode} />
    </div>) : (<div>
        <DesktopHeader mode={mode} setMode={setMode} sideBarShow={sideBarShow} setSideBarShow={setSideBarShow} />
        <DesktopSideBar items={[
            {
                icon: `./icons/icon_server_${mode === 'light' ? 'dark' : 'light'}.png`,
                label: '選擇伺服器',
                buttomBorder: true,
                iconBackgroundColor: (mode === 'light' ? '#FFF' : '#123'),
                selected: true,
                redirectURL: 'https://youtu.be/dQw4w9WgXcQ'
            },
            {
                icon: `./icons/icon_invite.png`,
                label: '邀請機器人',
                buttomBorder: false,
                iconBackgroundColor: 'rgba(113, 136, 254, 0.3)',
                selected: false,
                redirectURL: 'https://discord.com/api/oauth2/authorize?client_id=906525606177566830&permissions=8&scope=bot%20applications.commands'
            }
        ]} mode={mode} sideBarShow={sideBarShow} />
        <MainContainer mode={mode} sideBarShow={sideBarShow}/>
    </div>))
}

export default MainPage