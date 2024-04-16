import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth.js';

const Navbar = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const handleLogin = () => {
        setLoggedIn(true);  
    };
    const handleLogout = () => {
        setLoggedIn(false);  
    };
console.log(loggedIn)
   return (
    <>
        <div className='flex items-center justify-between bg-gray-700 p-4 h-full border-b-2'>
            <h2 className='text-[24-px font-bold text-blue-400'>Twighlight Emporium Tracker</h2>
            <button 
                className='text-[24-px font-bold text-blue-500 hover:border-[2px] border-blue-500 rounded-md p-1 text-[15px] cursor-pointer'
                onClick={ loggedIn ? (handleLogout) : ( handleLogin )}
                // onClick={() => setLoggedIn(() => !loggedIn)}    
            >
                    {loggedIn ? (
                        <Link to='/'>LOGOUT</Link>
                    ) : (
                        <Link to='/dashboard'>LOGIN/SIGNUP</Link>
                    )}
            </button>
        </div> 
    </>
   ); 
};
export default Navbar