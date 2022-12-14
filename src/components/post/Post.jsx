import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { likePost } from '../../api/PostRequest'
import { useEffect } from 'react'
import { getUser } from '../../api/UserRequest'


const Post = ({data}) => {
    const {user} = useSelector((state)=> state.authReducer.authData)
    const [liked, setLiked] = useState(data.likes.includes(user._id))
    const [likes, setLikes] = useState(data.likes.length)
    //const [postUser, setPostUser] = useState({}) TODO: put the user info in the post

    const handleLike = () => {
        setLiked((prev) => !prev)
        likePost(data._id, user._id)
        liked ? setLikes((prev)=> prev - 1): setLikes((prev)=> prev + 1);
    }
/*
    useEffect(()=>{
        const fetchUser = async()=> {
            const {data} = await getUser(data.);
            setPostUser(data)
        };
        fetchUser();
    }, []);
*/
    return (
        <div className = "Post">
            <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image:""} alt=""/>
            <div className='postReact'>
                <img src= {liked? Heart:NotLike} alt="" style={{cursor: "pointer"}} onClick = {handleLike}/>
                <img src= {Comment} alt="" />
                <img src= {Share} alt="" />
            </div>
            <span style={{color: "gray", fontSize: "16px"}}>
                {likes} likes
            </span>
            <div className='detail'>
                <span><b>{data.name}</b></span>
                <span style={{fontSize: "18px"}}> 
                    {data.desc}
                </span>
            </div>
        </div>
    )
}

export default Post