import './maincontainer.css'
import './maincontainer_placeholder.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import jscookie from 'js-cookie'

function placeholderGen(count) {
    let returnData = []
    for (let i = 0; i < count; i++) {
        returnData.push(<div className='loading_placeholder'>
            <div className='loading_backdrop_filter'>
                <div className='loading_server_icon'></div>
                <div className='loading_server_content'></div>
            </div>
        </div>)
    }
    return returnData
}

const MainContainer = ({ mode, mobileMode, sideBarShow, userData, loggedIN, mutualGuilds }) => {
    return (<div className={mode}>
        <div className={`mainContainer ${mobileMode ? 'mobile' : 'desktop'} ${sideBarShow ? 'show' : 'noshow'}`}>
            <h1>{loggedIN ? userData.username ? '歡迎, ' + userData.username : '載入中' : '請先登入'}</h1>
            {(mutualGuilds.length !== 0) ? (<div className='main_guild_container'>{mutualGuilds.map(mutualGuild => (
                <div className='guild_container' style={{ backgroundImage: `url("https://cdn.discordapp.com/icons/${mutualGuild.id}/${mutualGuild.icon}.webp")` }}>
                    {mutualGuild.icon ? undefined : <div className='no_icon'><h1>{mutualGuild.name}</h1></div>}
                    <div className='backdrop_filter'>
                        <div className='server_icon'>{mutualGuild.icon ? <img alt={mutualGuild.name} src={`https://cdn.discordapp.com/icons/${mutualGuild.id}/${mutualGuild.icon}.webp`}></img> : <p>{mutualGuild.name}</p>}</div>
                        <div className='server_content'><p><b>{mutualGuild.name}</b></p></div>
                    </div>
                </div>
            ))}</div>) : (loggedIN ? <div className='loading_placeholder_container'>{placeholderGen(12)}</div> : undefined)}
        </div>
    </div>)
}

export default MainContainer