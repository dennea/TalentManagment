import React from 'react'
import './PortfolioCard.css'
import {PortData} from '../../data/PortfolioData'

const PortfolioCard = () => {
    return (
        <div className = "PortfolioCard">
            {PortData.map((pic,id) => {
                return(
                    <div className="portImage">
                        <img src={pic.img} alt="" />
                    </div>
                )
            })}
        </div>
    )
}

export default PortfolioCard
