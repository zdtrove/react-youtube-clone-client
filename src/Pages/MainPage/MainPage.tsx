import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./MainPage.scss"

function MainPage() {
    return (
        <div className="MainPage">
            <div className="top">
                <Navbar />
            </div>
            <div className="center">
                <Sidebar />
                <div className="VideoView"></div>
            </div>
        </div>
    )
}

export default MainPage
