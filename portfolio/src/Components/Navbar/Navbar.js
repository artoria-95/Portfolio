import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import {SidebarData} from './SidebarData';
import './navbar.css';
import {IconsContext} from 'react-icons';

export default function Navbar(){

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = ()=> setSidebar(!sidebar);

  return(
    <>
    <div className="navbar">
      <Link to="#" className="menu-bars">
        <AiIcons.AiOutlineBars onClick={showSidebar}/>
      </Link>      
    </div>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
      <ul className="nav-menu-items">
        <li className="navbar-toggle">
          <Link to="#" className='menu-bars'>
            <CgIcons.CgCloseR onClick={showSidebar}/>
          </Link>
        </li>
        {SidebarData.map((item, index)=>{
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
    </>

  )
}