import React, { useEffect } from 'react'
import './Posts.css'
import Post from '../post/Post'
import {useDispatch, useSelector} from "react-redux"
import { getTimeLinePosts } from '../../actions/PostAction.js'

const Posts = () => {
    const dispatch = useDispatch()
    const {user} = useSelector((state)=> state.authReducer.authData)
    let {posts, loading} = useSelector((state)=>state.postReducer)
    
    useEffect(()=> {
        dispatch(getTimeLinePosts(user._id))
    }, [])

    return ( 
        <div className = "Posts">
            {loading ? "Fetching Posts...":
            posts.map((post,id)=>{
                return <Post data={post} id={id}/>
            })}
        </div>
    )
}

export default Posts