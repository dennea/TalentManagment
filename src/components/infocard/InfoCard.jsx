import React,{useState, useEffect} from 'react'
import './InfoCard.css'
import {UilPen} from '@iconscout/react-unicons'
import ProfileModal from '../profilemodal/ProfileModal';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import * as UserApi from '../../api/UserRequest.js'

const InfoCard = () => {
    const [modalOpened, setModalOpened] = useState(false);
    const dispatch = useDispatch()
    const params = useParams()
    const profileUserId = params.id // getting the user id from the link 
    const [profileUser, setProfileUser] = useState({})
    const {user} = useSelector((state)=>state.authReducer.authData)

    useEffect(()=>{
        const fetchProfileUser  = async() =>{
            if(profileUserId === user._id) {
                setProfileUser(user)
            } else {
                const profileUser = await UserApi.getUser(profileUserId)
                setProfileUser(profileUser)
            }
        }
        fetchProfileUser();
    }, [user]) // if user is changed then useEffect will be re-rendered. user is a dependancy

    return (
        <div className = "InfoCard">
            <div className="infoHead">
                <h4>Your Info</h4>
                {user._id === profileUserId ? (<div>
                    <UilPen 
                    width='1.5rem' 
                    height="1.2srem"
                    onClick = {()=>setModalOpened(true)}/>
                    <ProfileModal modalOpened = {modalOpened} 
                    setModalOpened = {setModalOpened}
                    data = {user}/>
                </div>): ("")}
                
            </div>
            <div className="info">
                <span><b>Current Location </b></span>
                <span>{profileUser.location  ? profileUser.location:"N/A"}</span>
            </div>
            <div className="info">
                <span><b>Mother Agency </b></span>
                <span>{profileUser.motherAgent  ? profileUser.motherAgent:"N/A"}</span>
            </div>
            <div className="info">
                <span><b>Height </b></span>
                <span>{profileUser.height ? profileUser.height:"N/A"}</span>
            </div>
            <div className="info">
                <span><b>Eyes </b></span>
                <span>{profileUser.eyes ? profileUser.eyes:"N/A"}</span>
            </div>
            <div className="info">
                <span><b>Hair </b></span>
                <span>{profileUser.hair ? profileUser.hair:"N/A"}</span>
            </div>
            <div className="info">
                <span><b>Waist </b></span>
                <span>{profileUser.waist ? profileUser.waist:"N/A"}</span>
            </div>
            <div className="info">
                <span><b>Shoes </b></span>
                <span>{profileUser.shoes ? profileUser.shoes:"N/A"}</span>
            </div>
        </div>
    )
}

export default InfoCard