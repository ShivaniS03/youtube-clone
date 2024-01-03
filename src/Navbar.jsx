import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegBell} from "react-icons/fa";
import { MdVideoCall } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { AiFillAudio } from "react-icons/ai";


function Navbar() {
    return (
        <>
<nav>

<div  >
<ul className='d-flex' >
<FaBars className='icon' />
<img src="https://1.bp.blogspot.com/-qdRfUNOtjkM/XeI_00z9pzI/AAAAAAAAF4E/FeD2SvVFnKUjPAKQ_cNM6-D2ahjKb0HkQCLcBGAsYHQ/s1600/Youtube-Icon-square-2340x2340-2.png"
                  height="40" width="40"  ></img>
                 <h4>Youtube</h4>

               
                <li>
                    <form  >
                        <input type="text" />
                        <FaMagnifyingGlass className='search' />
                       <AiFillAudio className='audio'  />
                    </form>
                  
                </li>
               
                    <li >
                    <MdVideoCall className='user'/>
                     <FaRegBell  className='user'/>                  
                    <FaRegUserCircle className='user'/></li>
                </ul> 
                </div>  
</nav>
        </>
    )
}

export default Navbar



