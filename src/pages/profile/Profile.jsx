import React from 'react'
import ProfileLeft from '../../components/profileleft/ProfileLeft'
import ProfileMiddle from '../../components/profilemiddle/ProfileMiddle'
import ProfileRight from '../../components/profileright/ProfileRight'
import './Profile.css'

const Profile = () => {
    return (
        <div className = "Profile">
            <ProfileLeft />
            <ProfileMiddle/>
            <ProfileRight />
        </div>
    )
}

export default Profile