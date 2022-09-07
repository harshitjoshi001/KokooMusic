
import LoginImg from '../assets/pexels3.jpeg'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserById } from '../redux/api/api'
import { AppDispatch, RootState } from '../redux/store'
import { Navigate } from 'react-router-dom'
import AudioPlayer from './AudioPlayer'
import tracks from '../tracks'

const Login = () => {

    const dispatch = useDispatch<AppDispatch>();

    const isLogin = useSelector((state:RootState) => (state.fetchReducer.isLoggedIn))

    const [state,setState] = useState({
    email: "",
    password: ""
  })

   
   const handleSubmit = () => {
    console.log(state)
    dispatch(fetchUserById(state))
   }

   function handleChange(evt : any) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
   return (<>
        <div className="relative w-full h-screen bg-zinc-900/98">
            <img className="absolute w-full h-full object-cover mix-blend-overlay" src={LoginImg} alt='/' />
            <div className='flex justify-center items-center h-full'>
                <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
                    <h2 className='text-4xl font-bold text-center py-6'>Login</h2>
                    <div className='flex justify-between py-8'>
                        <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center mx-4'><FcGoogle/>Google</p>
                        {/* <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><BsFacebook/>facebook</p> */}
                    </div>
                    <div className=' flex flex-col mb-4'>
                        <label>
                            username
                        </label>
                        <input className='border relative bg-gray-100 p-2' name='email' onChange={handleChange}/>
                    </div>
                    <div className=' flex flex-col mb-4'>
                        <label>
                            password
                        </label>
                        <input className='border relative bg-gray-100 p-2' name='password' onChange={handleChange} />
                    </div>
                    <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white' onClick={(e) =>{
                        e.preventDefault()
                        handleSubmit()}}>Sign In</button>
                    <p className='flex item-center'><input className='mr-2' type='checkbox' />Remember Me</p>
                    <p className='text-center mt-8'>Not a Member ? Sign UP Now</p>
                </form>
            </div>
        </div>
    </>
    )
}

export default Login























{/* <div>
            <img src={''} alt='/'></img>
        </div>
        <div>
            <form >
                <h2 >
                    LOGIN
                </h2>
                <div>
                    <label>User_Name:</label>
                    <input type='text' />
                </div>
                <div>
                    <label>password:</label>
                    <input type='text' />
                </div>
                <div>
                <input type='checkBox'/>
                <p>!forget password</p>
                </div>
            </form>
            <button>LOGIN</button>

        </div> */}