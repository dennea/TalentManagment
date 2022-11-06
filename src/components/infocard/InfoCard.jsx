import React from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'

const InfoCard = () => {
    return (
        <div className = "InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                <div>
                    <UilPen width='1.5rem' height="1.2srem"/>
                </div>
            </div>
            <div className="info">
                <span><b>Current Location </b></span>
                <span>Edmonton AB</span>
            </div>
            <div className="info">
                <span><b>Mother Agency </b></span>
                <span>Mode Models</span>
            </div>
            <div className="info">
                <span><b>Height </b></span>
                <span>5'9</span>
            </div>
            <div className="info">
                <span><b>Eyes </b></span>
                <span>Brown</span>
            </div>
            <div className="info">
                <span><b>Hair </b></span>
                <span>Brown</span>
            </div>
            <div className="info">
                <span><b>Waist </b></span>
                <span>26"</span>
            </div>
        </div>
    )
}

export default InfoCard