import React, { useState } from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'
import {useDispatch} from 'react-redux'

const Auth = () => {

    const [isSignUp, setIsSignUp] = useState(false)
    const dispatch = useDispatch()
    const [data, setData] = useState({
        firstname:"",
        lastname:"",
        username:"",
        password:"",
        confirmpassword:"",
        username: ""
    })
    const [confirmPass, setConfirmPass] = useState(true)

    const handleChange = (e)=> {
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(isSignUp) {
            (data.password === data.confirmpassword) ? setConfirmPass(true):setConfirmPass(false)
        }
    }

    const resetForm = ()=>{
        setConfirmPass(true);
        setData({
            firstname:"",
            lastname:"",
            username:"",
            password:"",
            confirmpassword:"",
            username: ""

        })
    }

    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>NeaBobea Media</h1>
                    <h6>Find your next opportunity</h6>
                </div>
            </div>
            {/* This is the right side of the auth page, determines sign up vs login*/}
            <div className="a-right">
            <form className='infoForm authForm' onSubmit={handleSubmit}>
                <h3>{isSignUp ?  "Sign Up" : "Log In"}</h3>
                {isSignUp &&
                    <div>
                        <input 
                            type="text" 
                            placeholder='First Name'
                            className='infoInput' 
                            name = 'firstname' 
                            onChange = {handleChange}
                            value = {data.firstname}/>
                        <input 
                            type="text" 
                            placeholder='Last Name'
                            className='infoInput' 
                            name = 'lastname' 
                            onChange = {handleChange}
                            value = {data.lastname}/>
                    </div>
                }
                <div>
                    <input 
                        type="text" 
                        placeholder='Username'
                        className='infoInput' 
                        name = 'username' 
                        onChange = {handleChange}
                        value = {data.username}/>
                </div>
                <div>
                    <input 
                        type="password" 
                        placeholder='Password'
                        className='infoInput' 
                        name = 'password' 
                        onChange = {handleChange}
                        value = {data.password}/>
                    {isSignUp && 
                        <input 
                            type="password" 
                            placeholder='Confirm Password'
                            className='infoInput' 
                            name = 'confirmpassword' 
                            onChange = {handleChange}
                            value = {data.confirmpassword}/>
                    }
                </div>
                <span style={{display: confirmPass? "none":"block", color: 'red', fontSize: '12px', alignSelf: "flex-end", margin: '5px'}}>
                    * Passwords don't match
                </span>
                <div>
                    <span style={{fontSize: '12px',cursor: "pointer"}} onClick = {()=>{setIsSignUp((prev) => ! prev); resetForm()}} >
                    {isSignUp ? "Already have an account. Log In!":"Dont have an accont. Sign up!"}</span>
                </div>
                <button className='button infoButton' type='submit'>
                {isSignUp ? "Sign Up":"Log In"} </button>
            </form>
        </div>
        </div>
    )
}

export default Auth
