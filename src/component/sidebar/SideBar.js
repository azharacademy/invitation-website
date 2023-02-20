import React from 'react'
import './SideBar.scss'
import SideBarLogo from './SideBarLogo'
import SideBarList from './SideBarList'
import SideBarHelp from './SideBarHelp'

function SideBar() {
    return (
        <div className='main'>
            <SideBarLogo />
            <SideBarList />
            <SideBarHelp />
        </div>
    )
}

export default SideBar
