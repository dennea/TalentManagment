import React from 'react'
import './ProfileCard.css'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'


const ProfileCard = () => {
    return (
        <div className = "ProfileCard">
            <div className="ProfileImages">
                <img src={Cover} alt='' />
                <img src={Profile} alt='' />
            </div>
            <div className='ProfileName'>
                <span>Dennea MacCallum</span>
                <span>Model @ Mode Models</span>
            </div>

            <div className='followStatus'>
                <hr />
                <div>
                    <div className='follow'>
                        <span>400</span>
                        <span>Connections</span>
                    </div>
                    <div className='vl'></div>
                    <div className='follow'>
                        <span>4</span>
                        <span>Groups</span>
                    </div>
                </div>
                <hr />
            </div>
            <span>
                I AM AWESOME
            </span>
            <span>
                My Profile {/* TODO: Hide this in the actual profile */}
            </span>
        </div>
    )
}

export default ProfileCard