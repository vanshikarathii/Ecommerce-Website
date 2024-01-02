import React from 'react'
import './CSS/LoginSignup.css'


const LoginSignup =()=>{
    return (
        <>
        <div className='loginsignup'>
            <div className='loginsignup-container'>
                <h1>Sign Up</h1>
                <div className='loginsignup-fields'>
                    <input type="text" placeholder='Enter Your Name'/>
                    <input type="email" placeholder='Enter Email Address'/>
                    <input type="password" placeholder='Enter Password'/>

                </div>
                <button>Continue</button>
                <p className='loginsignup-login'>Already have a Account? <span> Login here</span></p>
                <div className='loginsignup-agree'>
                    <input type="checkbox" name='' id=''/>
                    <p>By continuing I agree to Terms of Use & Privacy Policy</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginSignup