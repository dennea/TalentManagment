import React from 'react'
import ProfileLeft from '../../components/profileleft/ProfileLeft'
import ProfileMiddle from '../../components/profilemiddle/ProfileMiddle'
import './Profile.css'

const Profile = () => {
    return (
        <div className = "Profile">
            <ProfileLeft />
            <ProfileMiddle/>
        </div>
    )
}

export default Profile