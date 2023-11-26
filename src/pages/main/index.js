import React, { useEffect, useState } from 'react'
import jscookie from 'js-cookie'
import DesktopHeader from '../components/desktop/header'
import DesktopSideBar from '../components/desktop/sidebar'
import MobileHeader from '../components/mobile/header'
import MobileSideBar from '../components/mobile/sidebar'
import './index.css'
import MainContainer from './components/maincontainer'
import SideBarEffect from '../components/mobile/sidebarEffect'
import DesktopLogin from '../components/desktop/login'
import MobileLogin from '../components/mobile/login'
import axios from 'axios'

const options = {
    apiEndpoints: {
        userData: 'http://localhost/api/v1/user',
        mutualGuilds: 'http://localhost/api/v1/mutualguilds'
    }
}

function fetchData(setMutualGuilds) {
    axios.get(options.apiEndpoints.mutualGuilds, { withCredentials: true })
        .then((res) => {
            if (res.status === 429) {
                setTimeout(fetchData(setMutualGuilds), 1000)
            }
            setMutualGuilds(res.data.data)
        })
        .catch((error) => {

        })
}

const MainPage = () => {
    const [mode, setMode] = useState(jscookie.get('theme') === 'light' ? 'light' : 'dark')
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [mobileMode, setMobileMode] = useState(windowWidth < 768)
    const [sideBarShow, setSideBarShow] = useState(!mobileMode)

    const [userData, setUserData] = useState({});
    const [loggedIN, setLoggedIN] = useState(true)
    const [mutualGuilds, setMutualGuilds] = useState([])

    useEffect(() => {
        let theme = jscookie.get('theme')
        if (theme === '') {
            jscookie.set('theme', 'dark')
        }
        window.addEventListener('resize', (event) => {
            setWindowWidth(window.innerWidth)
        })

        // setUserData({
        //     username: 'user'
        // })
        // setMutualGuilds([{
        //     name: 'Guild1',
        //     id: '930401405230010379',
        //     icon: '8ffeb5e5d79ddcb1e1b71d813e37a539'
        //     // },
        //     // {
        //     //     name: 'Guild2',
        //     //     id: '1024840654314012743',
        //     //     icon: '1e3b89bed7be1d7a53b02fe6828d3312'
        //     // },
        //     // {
        //     //     name: 'Guild3',
        //     // },
        //     // {
        //     //     name: 'Guild4',
        //     // },
        //     // {
        //     //     name: 'Guild5',
        //     // },
        //     // {
        //     //     name: 'Guild6',
        // }])
        axios.get(options.apiEndpoints.userData, { withCredentials: true })
            .then((res) => {
                setUserData(res.data)
            })
            .catch((error) => {
                setLoggedIN(false)
            })

        setTimeout(fetchData(setMutualGuilds), 1000)
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
        <MobileLogin mode={mode} loggedIN={loggedIN} />
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
        ]} mode={mode} sideBarShow={sideBarShow} userData={userData} loggedIN={loggedIN}/>
        <SideBarEffect mode={mode} sideBarShow={sideBarShow} />
        <MainContainer mode={mode} mobileMode={mobileMode} sideBarShow={sideBarShow} userData={userData} loggedIN={loggedIN} mutualGuilds={mutualGuilds} />
    </div>) : (<div>
        <DesktopLogin mode={mode} loggedIN={loggedIN} />
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
        ]} mode={mode} sideBarShow={sideBarShow} userData={userData} loggedIN={loggedIN}/>
        <MainContainer mode={mode} sideBarShow={sideBarShow} userData={userData} loggedIN={loggedIN} mutualGuilds={mutualGuilds} />
    </div>))
}

export default MainPage