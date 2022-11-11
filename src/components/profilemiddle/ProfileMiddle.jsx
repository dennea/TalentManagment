import React from 'react'
import PortfolioCard from '../portfoliocard/PortfolioCard'
import ProfileCard from '../profilecard/ProfileCard'
import './ProfileMiddle.css'

const ProfileMiddle = () => {
    return (
        <div className = "profileMiddle">
            <ProfileCard />
            <div className="porfolioOrPosts">
                <span> <b>Portfolio</b> </span>
                <div className='vl'></div>
                <span> <b>Posts</b> </span>
            </div>
            <PortfolioCard />
        </div>
    )
}

export default ProfileMiddle