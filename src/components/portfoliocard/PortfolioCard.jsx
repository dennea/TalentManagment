import React,{useState}from 'react'
import './PortfolioCard.css'
import PortfolioModal from '../portfoliomodal/PortfolioModal.jsx';
import plus from '../../img/plus.png'
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage } from '../../actions/UploadAction'
import { useParams } from 'react-router-dom';
import { updateUser } from '../../actions/UserAction';



const PortfolioCard = () => {
    const [modalOpened, setModalOpened] = useState(false);
    const [currImage, setcurrImage] = useState(null);
    const {user} = useSelector((state)=> state.authReducer.authData)
    const {password, ...other} = user;
    const [formData, setFormData] = useState(other);
    const dispatch = useDispatch()
    const param = useParams()
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER


    const handleOnClick = (image) => {
        setModalOpened(true);
        setcurrImage(image);
    }

    const onImageChange = (event) => {
        //event.preventDefault();
        let UserData = formData; 

        // get the new image
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            if (img) {
                const data = new FormData()
                const filename = Date.now() + img.name
                data.append("name", filename)
                data.append("file", img)

                // update portfolio
                if (UserData.portfolio == []){
                    UserData.portfolio = [filename]
                } else {
                    UserData.portfolio = [...UserData.portfolio,filename]
                }

                try {
                    // upload image to server
                    // Note: there is a bug here where it throws an error but it still seems to work?
                    dispatch(uploadImage(data))
                } catch (error) {
                    console.log(error)
                }
            }
            dispatch(updateUser(param.id, UserData));
        }
    }

    return (
        <div className = "PortfolioCard">
            {user.portfolio.map((pic,id) => {
                return(
                    <div className="portImage">
                        <img src={serverPublic + pic} alt="" onClick = {() => handleOnClick(serverPublic + pic)}/>
                    </div>
                )
            })}
            <div className="portImage plusImage wrapper">
                <img src={plus} alt=""/> {/*get id from params and hide this*/}
                <input type="file" onChange = {onImageChange}/> 
            </div>

            <PortfolioModal modalOpened = {modalOpened} 
                setModalOpened = {setModalOpened} image = {currImage}/>
        </div>
    )
}

export default PortfolioCard
