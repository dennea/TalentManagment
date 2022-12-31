import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import { addMessage, getMessages } from '../../api/MessageRequest'
import { getUser } from '../../api/UserRequest'
import { format } from 'timeago.js'
import InputEmoji from 'react-input-emoji'
import './ChatBox.css'

const ChatBox = ({chat, currentUser, setSendMessage, recieveMessage}) => {
    const [userData, setUserData] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const scroll = useRef()

    const handleChange = (newMessage)=> {
        setNewMessage(newMessage)
    }

    useEffect(()=> {
        if (recieveMessage !== null && recieveMessage?.chatId === chat?._id) {
            setMessages([...messages,recieveMessage])
            console.log("recived message",recieveMessage)
        }

    }, [recieveMessage])

    // fetching data for the header of the chat box
    useEffect(()=>{
        const userId = chat?.members?.find((id) => id !== currentUser)

        const getUserData = async() => {
            try {
                const {data} = await getUser(userId)
                setUserData(data) 
            } catch (error) {
                console.log(error)
            }
        }
        if(chat !== null) getUserData();

    }, [chat, currentUser])

    const handleSend = async (e) => {
        e.preventDefault();
        const message = {
            senderId: currentUser,
            text: newMessage,
            chatId: chat._id
        }

        // send message to data base
        try {
            const {data} = await addMessage(message);
            setMessages([...messages, data])
            setNewMessage("")
        } catch (error) {
            console.log(error)
        }

        //send to socket server
        const receiverId = chat.members.find((id) => id !== currentUser);
        setSendMessage({...message, receiverId})

    }

    useEffect(() => {
        const fetchMessages = async() => {
            try {
                const {data} = await getMessages(chat._id);
                setMessages(data)
                console.log(data)
                console.log(messages)

            } catch (error) {
                console.log(error)
            }
        };
        if(chat !== null) fetchMessages();
    }, [chat])

    // always scroll to the last message
    useEffect(()=>{
        scroll.current?.scrollIntoView({behavior: "smooth"})
    }, [messages])

    return (
        <>
        <div className="Chat-container">
            {chat ? (
                    <>
                    <div className="chat-header">
                        <div className="follower">
                            <div>
                                <div>
                                    <img src={userData?.profilePicture? process.env.REACT_APP_PUBLIC_FOLDER + userData.profilePicture:
                                    process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.jpg"} alt=""
                                    className='followerImage'
                                    style={{width: "50px", height: "50px"}}/>
                                </div>
                                <div className="name" style={{fontSize: "0.8rem", padding: "15px"}}>
                                    <span>{userData?.firstname} {userData?.lastname}</span>
                                </div>
                            </div>
                        </div>
                        <hr style = {{width: '85%', border: '0.1px solid #ececec'}}/>
                    </div>
                                
                    {/* chat-body */}
                    <div className = "chat-body" >
                    {messages.map((message) => (
                        <>
                        <div ref = {scroll}
                        className={
                            message.senderId === currentUser
                                ? "message own"
                                : "message"
                            }
                        >
                            <span>{message.text}</span>{" "}
                            <span>{format(message.createdAt)}</span>
                        </div>
                        </>
                    ))}
                    </div>

                    <div className="chat-sender">
                        <div>+</div> {/* TODO: be able to send media */}
                        <InputEmoji             
                        value={newMessage}
                        onChange={handleChange}
                        />
                        <div className="send-button button" onClick={handleSend}>Send</div>
                    </div>
                    </>
            ) : (
            <span className='chatbox-empty-message'>
                Select a Chat
            </span>
            )}
        </div>
        </>
    )
}

export default ChatBox