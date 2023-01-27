import React from 'react'
import './TrendCard.css'
import { TrendData } from '../../data/TrendData'
import plus from '../../img/plus.png'

const TrendCard = () => {
    return (
        <div className = "TrendCard">
                <h3 class="header">Upcoming Events</h3>
                {TrendData.map((trend)=>{
                    return(
                        <div className="trend">
                            <span class="dot"></span>
                            <div class="schedule">
                                <span class="name">{trend.name}</span>
                                <span class="date">{trend.date}</span>
                            </div>
                        </div>
                    )
                })}
                 <div className="trend">
                    <span class="add"> Add a new event + </span> 
                 </div>
                
        </div>
    )
}

export default TrendCard