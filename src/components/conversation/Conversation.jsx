import React, { useState } from 'react'
import { useEffect } from 'react'
import { getUser } from '../../api/UserRequest'

const Conversation = ({data, currentUserId, online}) => {
    const [userData, setUserData] = useState(null) // this is the other user we are talking to 

    useEffect(()=>{
        const userId = data.members.find((id) => id !== currentUserId)
        const getUserData = async() => {
            try {
                const {data} = await getUser(userId)
                setUserData(data) 
            } catch (error) {
                console.log(error)
            }
        }
        getUserData()
    }, [])

    return (
        <>
            <div className='follower conversation'>
                <div>
                    <div>
                        {online && <div className="online-dot"> </div>}
                        <img src={userData?.profilePicture? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture:
                        process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.jpg"} alt=""
                        className='followerImage'
                        style={{width: "50px", height: "50px"}}/>
                    </div>
                    <div className="name" style={{fontSize: "0.8rem", padding: "15px"}}>
                        <span>{userData?.firstname} {userData?.lastname}</span>
                        <span>{online ? "Online":"Offline"}</span>
                    </div>
                </div>
                <hr style = {{width: '85%', border: '0.1px solid #ececec'}}/>
            </div>
        </>
    );
}

export default Conversation