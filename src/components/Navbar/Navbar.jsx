import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.png"

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(()=>{
        //saving it in local storage
        const savedMode = localStorage.getItem('darkMode');
        if(savedMode != null){
            return savedMode === 'true';
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    })

    useEffect(() => {
      
      // saving toggle b/n dark and light mode
      const body = document.querySelector("body");
      isDarkMode ? body.classList.add("dark") : body.classList.remove("dark");
      localStorage.setItem("darkMode", isDarkMode.toString());

    }, [isDarkMode])
    
  return (
    <>
    <div className='flex flex-wrap justify-between w-full text-slate-900 dark:text-slate-100 '>
        
        <img src={logo} alt='logo' className=' w-14' /> 

        <h1 className='text-center  text-4xl font-bold m-1 hover:cursor-pointer text-rose-600'>
           List of best of all time Tv shows.
        </h1>
        <button className='text-3xl rounded-full font-bold' onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? '🌞' : '🌚'}
        </button>
    </div>
    </>
  )
}

export default Navbar