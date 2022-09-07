import LoginImg from '../assets/pexels3.jpeg'
import {FcGoogle} from 'react-icons/fc'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../redux/store'
import { registerUser } from '../redux/api/api'

const SignUp = () => {
  
    const dispatch = useDispatch<AppDispatch>()
    const [state,setState] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        gender:"",
        age: null
      }) 
      
      
      const handleSubmit = () => {
         dispatch(registerUser(state))         
      }

      function handleChange(evt : any) {
        const value = evt.target.value;
        setState({
          ...state,
          [evt.target.name]: value
        });
      }
      console.log()
    return(
    <>
    <div className="relative w-full h-screen bg-zinc-900/98">
            <img className="absolute w-full h-full object-cover mix-blend-overlay" src={LoginImg} alt='/' />
            <div className='flex justify-center items-center h-full'>
                <form className='max-w-[400px] w-full mx-auto bg-white p-8'>
                    <h2 className='text-4xl font-bold text-center py-6'>SIGN-UP</h2>
                    <div className='flex justify-between py-8'>
                        <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center mx-4'><FcGoogle/>Google</p>
                        {/* <p className='border shadow-lg hover:shadow-xl px-6 py-2 relative flex items-center'><BsFacebook/>facebook</p> */}
                    </div>
                    <div className=' flex flex-col mb-4'>
                        <label>
                            Email
                        </label>
                        <input className='border relative bg-gray-100 p-2' onChange={handleChange} name='email'/>
                    </div>
                    <div className=' flex flex-col mb-4'>
                        <label>
                            Password
                        </label>
                        <input className='border relative bg-gray-100 p-2' onChange={handleChange} name='password' />
                    </div>
                    <div className=' flex flex-col mb-4'>
                        <label>
                            Confirm-Password
                        </label>
                        <input className='border relative bg-gray-100 p-2' onChange={handleChange} name='confirmPassword'/>
                    </div>
                    <div className='flex justify-between py-8'>
                       <select className='border relative bg-gray-100 p-2' onChange={handleChange} name='gender' >
                        <option>gender</option>
                        <option>male</option>
                        <option>female</option>
                        <option>others</option>
                       </select>
                       <input className='border relative bg-gray-100 p-2' name='age' placeholder='age' onChange={handleChange} type='number'/>
                    </div>
                    <button className='w-full py-3 mt-8 bg-indigo-600 hover:bg-indigo-500 relative text-white' onClick={(e) =>{
                        e.preventDefault()
                        handleSubmit()
                      }}>Sign Up</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default SignUp