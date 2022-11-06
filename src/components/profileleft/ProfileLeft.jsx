import React from 'react'
import GroupsCard from '../groupscard/GroupsCard'
import InfoCard from '../infocard/InfoCard'
import LogoSearch from '../logosearch/LogoSearch'
import '../profileside/ProfileSide.css'

const ProfileLeft = () => {
    return (
        <div className = "ProfileSide">
            <LogoSearch />
            <InfoCard />
            <GroupsCard />
        </div>
    )
}

export default ProfileLeft