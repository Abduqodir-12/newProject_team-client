import React, { useState } from 'react'
import logo from '../images/Avtoelon-logo.jpg'
import eyes from "../images/eye.png"
import hiddin from "../images/hidden.png"
import { useInfoContext } from '../context/Context'
import { Link, useNavigate } from 'react-router-dom'
import { login, register } from '../api/authRequistion'
import { toast } from 'react-toastify'

const Auth = () => {
    const { setCurrentUser } = useInfoContext()
    const [isLogin, setIsLogin] = useState(false)
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const navigate = useNavigate();



    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    const handleSumbit = async (e) => {
        e.preventDefault()
        toast.loading("Please waiting...")
        setLoading(true)
        try {
            let res;
            const formData = new FormData(e.target)

            if (!isLogin) {
                res = await login(formData)
            } else {
                if (formData.get('password') === formData.get('confirmPassword')) {
                    res = await register(formData)
                } else {
                    setLoading(false);
                    toast.dismiss();
                    return toast.error("Passwor bilan Confrim password bir xil bo'lishi kerak!");
                }
            }
            navigate('/')
            localStorage.setItem('account', JSON.stringify(res.data.user))
            localStorage.setItem('token', JSON.stringify(res.data.token))
            setCurrentUser(res.data.user)
            toast.dismiss()
            toast.success(res.data.message)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            toast.dismiss()
            toast.error(error?.response?.data.message)
            console.log(error);
            
        }
    }

    return (
        <div>
            <div className="container">
                <div className="auth-content">
                    <img src={logo} alt="logo" className="auth-logo" />

                    <form onSubmit={handleSumbit} action="" className="auth-form">
                        <label className='auth-label'>
                            Telefon
                            <div className="input-div">
                                <input type="text" name='phoneNumber' className="auth-input" placeholder='998 (10) 100-0000' />
                            </div>
                        </label>
                        <label className='auth-label'>
                            Passowrd
                            <div className="input-div">
                                <input max={11} type={show ? "text" : "password"} name='password' className="auth-input" placeholder='password' />
                                <img onClick={() => { setShow(!show) }} src={show ? eyes : hiddin} alt="eye" className='eye-img' />
                            </div>
                        </label>
                        {isLogin &&
                            <label className='auth-label'>
                                Confirm Passowrd
                                <div className="input-div">
                                    <input type={show ? "text" : "password"} name='confirmPassword' className="auth-input" placeholder='Confirm Password' />
                                    <img onClick={() => { setShow(!show) }} src={show ? eyes : hiddin} alt="eye" className='eye-img' />
                                </div>
                            </label>
                        }
                        <button disabled={loading} className='auth-btn'>{isLogin ? "Sign Up" : "Login"}</button>
                        <span onClick={handleToggle} className='auth-span'>{isLogin ? "I already have an account" : "I don't have an account"}</span>
                    </form>

                    <Link href="#" className="write-admin">Avtoelon adminiga yozing</Link>
                </div>
            </div>
        </div>
    )
}

export default Auth