import React from 'react'
import GroupsCard from '../groupscard/GroupsCard'
import LogoSearch from '../logosearch/LogoSearch'
import ProfileCard from '../profilecard/ProfileCard'
import './ProfileSide.css'

const ProfileSide = () => {
    return (
        <div className = "ProfileSide">
            <LogoSearch />
            <ProfileCard />
            <GroupsCard />
        </div>
    )
}

export default ProfileSide