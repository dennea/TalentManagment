import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
    return (
        <div className="Auth">
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>NeaBobea Media</h1>
                    <h6>Find your next opportunity</h6>
                </div>
            </div>
            <SignUp/>
            {/*<Login />*/}
        </div>
    )
}

function Login(){
    return(
        <div className="a-right">
            <form className='infoForm authForm login'>
                <h3>Login</h3>
                <div>
                    <input 
                        type="text" 
                        placeholder='Username'
                        className='infoInput' 
                        name = 'username' />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder='Password'
                        className='infoInput' 
                        name = 'password' />
                </div>
                <div>
                    <span style={{fontSize: '12px'}}>Dont have an accont. Sign up!</span>
                    <button className='button infoButton' type='submit'>Login</button>
                </div>
            </form>
        </div>
    )
}

function SignUp(){
    return(
        <div className="a-right">
            <form className='infoForm authForm'>
                <h3>Sign Up</h3>
                <div>
                    <input 
                    type="text" 
                    placeholder='First Name'
                    className='infoInput' 
                    name = 'fistname' />
                     <input 
                    type="text" 
                    placeholder='Last Name'
                    className='infoInput' 
                    name = 'lastname' />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder='Username'
                        className='infoInput' 
                        name = 'username' />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder='Password'
                        className='infoInput' 
                        name = 'password' />
                     <input 
                        type="text" 
                        placeholder='Confirm Password'
                        className='infoInput' 
                        name = 'confirmpassword' />
                </div>
                <div>
                    <span style={{fontSize: '12px'}}>Already have an account. Login!</span>
                </div>
                <button className='button infoButton' type='submit'>Signup</button>
            </form>
        </div>
    )
}

export default Auth