import React from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from '../trendcard/TrendCard'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../actions/AuthAction'

const RightSide = () => {
    const dispatch = useDispatch()

    const handleLogout = () =>{
        dispatch(logout())
    }
    return (
        <div className = "RightSide">
            <div className="navIcons">
                <Link to = '../home'>
                    <img src={Home} alt="" />
                </Link>
                <UilSetting />
                <img src={Noti} alt="" />
                <Link to = '../chat'>
                    <img src={Comment} alt="" />
                </Link>
                <button className='button' onClick = {handleLogout}>Logout</button>
            </div>
            <TrendCard />
        </div>
    )
}

export default RightSide