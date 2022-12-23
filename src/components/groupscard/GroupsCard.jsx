import React, { useEffect, useState } from 'react'
import './GroupsCard.css'
import { useSelector } from "react-redux";
import User from '../User/User'
import { getAllUser } from '../../api/UserRequest';

const GroupsCard = () => {
    const [persons, setPersons] = useState([]);

    const {user} = useSelector((state) => state.authReducer.authData);

    useEffect (()=>{
        const fetchPersons = async()=> {
            const {data} = await getAllUser();
            setPersons(data)
        };
        fetchPersons();
    }, []);
    return (
        <div className = "GroupsCard">
            <h3>Users you may know</h3>
            {persons.map((person,id) => {
                if (person._id !== user._id){
                    return(
                        <User person = {person} key = {id}/>
                    )
                }
            })}
            <span>Show More</span>
        </div>
    )
}

export default GroupsCard