import React from 'react'
import Logo from "../assets/Logo.svg"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'



export const Navbar = (props) => {
  return (
    <div className=' flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto '>
        <Link to="./">
            <img src={Logo} alt='abheb' height={32} width={160} loading="lazy"></img>
        </Link>

        <div className=' flex gap-x-6 text-richblack-100'>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/">About</Link>
            </div>
            <div>
                <Link to="/">Contact</Link>
            </div>
        </div>

        <div className='flex items-center gap-x-4 text-richblack-100'>
    
            <div >
                {
                    !props.isloggedin && (
                        <Link to="/login">
                            <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"'>Log In</button>
                        </Link>
                    )
                }
                
            </div>

            <div>
            {
                    !props.isloggedin && (
                        <Link to="/signup">
                            <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"'> 
                                Sign Up
                            </button>
                        </Link>
                    )
                }
            </div>

            <div>
                {   
                    props.isloggedin && (
                        <Link to="/" onClick={()=>{
                            props.setLoggedin(false)
                            toast.success("Logged Out Successfully!")
                        }}>
                            <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"'>Logout</button>
                        </Link>
                        
                    )
                }
            </div>

            <div>
            {
                    props.isloggedin && (
                        <Link to="/dashboard">
                            <button className='bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700"'>Dashboard</button>
                        </Link>
                    )
                }
            </div>
           
        </div>
        
    </div>
    
  )
}
