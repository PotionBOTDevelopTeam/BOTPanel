import React, { useEffect, useState } from 'react'
import jscookie from 'js-cookie'
import DesktopHeader from '../components/desktop/header'
import DesktopSideBar from '../components/desktop/sidebar'
import MobileHeader from '../components/mobile/header'
import MobileSideBar from '../components/mobile/sidebar'

const MainPage = () => {
    const [mode, setMode] = useState(jscookie.get('theme') === 'light' ? 'light' : 'dark')
    const [mobileMode, setMobileMode] = useState(window.innerWidth < 768)
    const [sideBarShow, setSideBarShow] = useState(!mobileMode)

    window.addEventListener('resize', (event) => {
        setMobileMode(window.innerWidth < 768)
        setSideBarShow(!mobileMode)
    })

    useEffect(() => {
        let theme = jscookie.get('theme')
        if (theme === '') {
            jscookie.set('theme', 'dark')
        }
    }, [])

    useEffect(() => {
        jscookie.set('theme', mode)
    })

    return (mobileMode ? (<div>
        <MobileHeader mode={mode} setMode={setMode} sideBarShow={sideBarShow} setSideBarShow={setSideBarShow}/>
        <MobileSideBar items={[
            {
                icon: `./icons/icon_server_${mode === 'light' ? 'dark' : 'light'}.png`,
                label: '選擇伺服器',
                buttomBorder: true,
                iconBackgroundColor: (mode === 'light' ? '#FFF' : '#123'),
                selected: false
            },
            {
                icon: `./icons/icon_server_${mode === 'light' ? 'dark' : 'light'}.png`,
                label: '選擇伺服器',
                buttomBorder: false,
                iconBackgroundColor: (mode === 'light' ? '#FFF' : '#123'),
                selected: true
            }
        ]} mode={mode} sideBarShow={sideBarShow} />
    </div>) : (<div>
        <DesktopHeader mode={mode} setMode={setMode} sideBarShow={sideBarShow} setSideBarShow={setSideBarShow} />
        <DesktopSideBar items={[
            {
                icon: `./icons/icon_server_${mode === 'light' ? 'dark' : 'light'}.png`,
                label: '選擇伺服器',
                buttomBorder: true,
                iconBackgroundColor: (mode === 'light' ? '#FFF' : '#123'),
                selected: false
            },
            {
                icon: `./icons/icon_server_${mode === 'light' ? 'dark' : 'light'}.png`,
                label: '選擇伺服器',
                buttomBorder: false,
                iconBackgroundColor: (mode === 'light' ? '#FFF' : '#123'),
                selected: true
            }
        ]} mode={mode} sideBarShow={sideBarShow} />
    </div>))
}

export default MainPage