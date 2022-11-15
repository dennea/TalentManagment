import React,{useState}from 'react'
import './PortfolioCard.css'
import {PortData} from '../../data/PortfolioData'
import PortfolioModal from '../portfoliomodal/PortfolioModal.jsx';

const PortfolioCard = () => {
    const [modalOpened, setModalOpened] = useState(false);
    const [currImage, setcurrImage] = useState(null);

    const handleOnClick = (image) => {
        setModalOpened(true);
        setcurrImage(image);
    }
    return (
        <div className = "PortfolioCard">
            {PortData.map((pic,id) => {
                return(
                    <div className="portImage">
                        <img src={pic.img} alt="" onClick = {() => handleOnClick(pic.img)}/>
                    </div>
                )
            })}
            <PortfolioModal modalOpened = {modalOpened} 
                setModalOpened = {setModalOpened} image = {currImage}/>
        </div>
    )
}

export default PortfolioCard
