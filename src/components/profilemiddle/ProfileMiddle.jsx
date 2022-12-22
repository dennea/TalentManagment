import React,  { useState } from 'react'
import PortfolioCard from '../portfoliocard/PortfolioCard'
import ProfileCard from '../profilecard/ProfileCard'
import PostSide from '../PostSide/PostSide'
import './ProfileMiddle.css'

const ProfileMiddle = () => {
    const [showPortfolio, setShowPortfolio] = useState(true);

    return (
        <div className = "profileMiddle">
            <ProfileCard location = "profilePage"/>
            <div className="porfolioOrPosts">
                <span onClick = {()=>setShowPortfolio(true)} > <b>Portfolio</b> </span>
                <div className='vl'></div>
                <span onClick = {()=>setShowPortfolio(false)} > <b>Posts</b> </span>
            </div>
            {showPortfolio && <PortfolioCard />}
            {!showPortfolio && <PostSide />}
        </div>
    )
}

export default ProfileMiddle