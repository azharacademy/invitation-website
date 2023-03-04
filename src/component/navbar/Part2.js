import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import { unstable_composeClasses } from '@mui/material';
function Part2() {
    // const [intialActive,setInitialActive] = useState('');

    // const [removeActive, setRemoveActive] = useState('');
    // useEffect(() => {
    //     document.getElementById('activeLink').classList.remove('active')
    //     document.getElementById('activeLi').classList.remove('activeLi')
    //     console.log("use effect is called")
    // }, [])
    // const handleOnClick=()=>{
    //     document.getElementById('a_tag').classList.remove('active')
    //     document.
    // }
    return (
        <>
            {/* <div id="a_tag" className='a_tag'>
                    <ul style={{ width: 'max-content' }}>
                        <Link to='/' id='activeLink' className='active'><li id='activeLi' className='active'>Wedding</li></Link>
                        <Link to='/birthday'><li>Birthday</li></Link>
                        <Link to='/festivals'><li>Festivals</li></Link>
                        <Link to='/openingCeremony'><li>Opening Ceremony</li></Link>
                        <Link to='/openingCeremony'><li>Opening Ceremony</li></Link>
                        <Link to='/openingCeremony'><li>Opening Ceremony</li></Link>
                    </ul>
            </div> */}

            <div className='navigationBar'>
                <ul className='navigationList'>
                    <Link to='/' activeStyle={{
                        backgroundColor: '#e85e63',
                        color: '#ffffff !important',
                        borderRadius: '1rem',
                        /* padding: 0.2rem 0rem 0.2rem 0; */
                        transition: '0.5s'
                    }}><li className='intialActive'>Wedding</li></Link>
                    <Link to='/birthday'><li>Birthday</li></Link>
                    <Link to='/festivals'><li>Festivals</li></Link>
                    <Link to='/openingCeremony'><li>Opening Ceremony</li></Link>
                    <Link to='/openingCeremony'><li>Jummagi</li></Link>
                </ul>
            </div >
        </>
    )
}

export default Part2