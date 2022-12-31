import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { userChats } from '../../api/ChatRequest'
import { useDispatch } from 'react-redux'
import Conversation from '../../components/conversation/Conversation'
import LogoSearch from '../../components/logosearch/LogoSearch'
import './Chat.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons'
import { Link } from 'react-router-dom'
import { logout } from '../../actions/AuthAction'
import ChatBox from '../../components/chatbox/ChatBox'
import {io} from 'socket.io-client'


const Chat = () => {
    const {user} = useSelector((state) => state.authReducer.authData)
    const [chats, setChats] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [onlineUsers, setOnlineUsers] = useState([])
    const [sendMessage, setSendMessage] = useState(null)
    const [recieveMessage, setRecieveMessage] = useState(null)
    const socket = useRef()

    useEffect(()=> {
        const getChats = async()=> {
            try {
                const {data} = await userChats(user._id)
                setChats(data)
            } catch (error) {
                console.log(error)
            }
        }
        getChats()
    },[user]) // get chats everytime the logged in user is changed

    const dispatch = useDispatch()

    const handleLogout = () =>{
        dispatch(logout())
    }

    // connect to socket
    useEffect( () => {
        socket.current = io('http://localhost:8800')
        socket.current.emit("new-user-add", user._id)
        socket.current.on('get-users', (users)=>{
            setOnlineUsers(users)
        })
    },[user])

    //send messsage to socket server
    useEffect( () => {
        if(sendMessage !== null){
            socket.current.emit('send-message', sendMessage);
        }
    }, [sendMessage])

    // recieve massage from socket server
    useEffect( () => {
        socket.current.on("receive-message", (data) => {
            console.log("got message: ", data)
            setRecieveMessage(data);
          }
          );
    }, [])

    const checkOnlineStatus = (chat) => {
        const chatMember = chat.members.find((member) => member !== user._id);
        const online = onlineUsers.find((user) => user.userId === chatMember);
        return online ? true : false;
    };

    return (
        <div className = "Chat">
            {/* Left Side*/}
            <div className="Left-side-chat">
                <LogoSearch/>
                <div className="Chat-container">
                    <h2>Chats</h2>
                    <div className="Chat-list">
                        {chats.map((chat)=>(
                            <div onClick = {() => setCurrentChat(chat)}>
                                <Conversation data = {chat} currentUserId = {user._id} online = {checkOnlineStatus(chat)}/>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* Right Side*/}
            <div className="Right-side-chat">
                <div style = {{width: '20rem', alignSelf: 'flex-end'}}>
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
                </div>
                {/* chat body */}
                <ChatBox chat = {currentChat} currentUser = {user._id} setSendMessage = {setSendMessage} 
                recieveMessage = {recieveMessage}/>
            </div>
        </div>
    )
}

export default Chat