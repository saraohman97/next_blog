"use client"

import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react'
BsFillSunFill
import { BsFillSunFill } from 'react-icons/bs';
import { BsFillMoonFill } from 'react-icons/bs';

const DarkModeToggle = () => {
    const {toggle, mode} = useContext(ThemeContext);

    return (
        <div className='switch' onClick={toggle}>
        <div><BsFillSunFill className='switch_heaven' color='yellow' /></div>
        <div><BsFillMoonFill className='switch_heaven' color='gray' /></div>
        <div className='switch_eclipse' style={mode === "light" ? {left: "2px"} : {right: "2px"}} />
    </div>
  )
}

export default DarkModeToggle