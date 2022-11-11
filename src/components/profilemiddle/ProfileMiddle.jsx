import React from 'react'
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
        </div>
    )
}

export default ProfileMiddle