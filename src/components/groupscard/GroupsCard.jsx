import React from 'react'
import './GroupsCard.css'

import {Groups} from '../../data/GroupsData'
const GroupsCard = () => {
    return (
        <div className = "GroupsCard">
            <h3>Your Groups</h3>
            {Groups.map((group,id) => {
                return(
                    <div className='group'>
                        <div>
                            <img src={group.img} alt="" 
                            className='groupImage'/>
                            <div className='name'>
                                <span>{group.name}</span>
                                <span>{group.type}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
            <span>Show More</span>
        </div>
    )
}

export default GroupsCard