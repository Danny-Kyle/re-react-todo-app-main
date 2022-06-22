import React from 'react'
import {MdOutlineLightMode} from "react-icons/md"
import {MdOutlineNightlight} from "react-icons/md"

export const Header = ({darkTheme, setDarkTheme}) => {
  return (
    <div className='flex dark:bg-gray-900 bg-gray-300 justify-evenly dark:bg-footer-texture bg-hero-pattern bg-cover py-32'>
      <h1 className='tracking-widerest text-4xl font-semibold text-slate-100'> TODO </h1>
        <button onClick={()=> setDarkTheme(!darkTheme)} className="py-4">
            {darkTheme ? <MdOutlineNightlight/>: <MdOutlineLightMode />}
        </button>
    </div>
  )
}
