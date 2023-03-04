import React from 'react'
import Navbar from '../navbar/Navbar'

import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <>
            <Navbar />
            <div>
                <Outlet />
            </div>

        </>
    )
}

export default Root