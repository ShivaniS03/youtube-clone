import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaUser, FaHistory } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { BiLike } from "react-icons/bi";
import { CiStopwatch } from "react-icons/ci";
import { BsLightningCharge } from "react-icons/bs";
import Top from './Top';
import Video from './Video';
import Shorts from './Shorts';

function Aside() {
  return (
    <>
     <div className='aside'>
    
       <div >
       <ul>
            <li className='home'><IoMdHome /><a to="/Home">Home</a> </li>
            <li> <BsLightningCharge/> <a to="/Shorts">Shorts</a> </li>
            <li><MdOutlineSubscriptions/> <a to="/subscriptions">Subscriptions</a> </li>
            <h5>You <FaAngleRight /> </h5>
            <li> <FaUser/> <a to="/Your Channel">Your Channel</a> </li>
            <li> <FaHistory/> <a to="/History">History</a> </li>
            <li> <GoVideo/> <a to="/video">Your Videos</a> </li>
            <li> <CiStopwatch/> <a to="/watch later">Watch Later</a> </li>
            <li> <BiLike/> <a to="/liked video">Liked Videos</a> </li>
          <h5>Subscriptions</h5>
          <li><a to="/short break">Short Break</a> </li>
          <li><a to="/design club">design club</a> </li>
         

        </ul>
       </div>
        <div> <Top/>
        <Video/>
        <Shorts/>
        </div>
       
     </div> 
     
    </>
  )
}

export default Aside
