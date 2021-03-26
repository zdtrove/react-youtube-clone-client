import React, { useState } from 'react'
import "./Navbar.scss"
import YouTubeIcon from '@material-ui/icons/YouTube'
import Reorder from '@material-ui/icons/Reorder'
import SearchIcon from '@material-ui/icons/Search'
import AddBoxIcon from '@material-ui/icons/AddBox'

const Navbar: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <div className="navbarContainer">
            <div className="left">
                <button className="sidebarToggle">
                    <Reorder className="icon" />
                </button>
                <YouTubeIcon className="icon" style={{ color: 'red' }} />
                <h1>YouTube</h1>
            </div>
            <div className="center">
                <input className="searchBar" placeholder="Search" />
                <button className="searchButton">
                    <SearchIcon style={{ color: 'grey' }} />
                </button>
            </div>
            <div className="right">
                <button className="createVideo">
                    <AddBoxIcon className="icon" />
                </button>
                {loggedIn ? (
                    <button className="profilePic"></button>
                ) : (
                    <button className="signInButton">Sign In</button>
                )}
                
            </div>
        </div>
    )
}

export default Navbar
