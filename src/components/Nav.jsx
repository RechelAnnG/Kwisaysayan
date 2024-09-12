import { useState } from 'react';
import { Link } from "react-router-dom";

import libraryBeigeIcon from '../assets/images/libraryBeige-icon.png';
import libraryYellowIcon from '../assets/images/libraryYellow-icon.png';
import reportsBeigeIcon from '../assets/images/reportsBeige-icon.png';
import reportsYellowIcon from '../assets/images/reportsYellow-icon.png';
import settingsBeigeIcon from '../assets/images/settingsBeige-icon.png';
import settingsYellowIcon from '../assets/images/settingsYellow-icon.png';
import profileBeigeIcon from '../assets/images/profileBeige-icon.png';
import profileYellowIcon from '../assets/images/profileYellow-icon.png';


function Nav({ activeLink, setActiveLink }) {

    const links = [
      { 
        path: "/Library", 
        text: "Library", 
        activeIcon: libraryYellowIcon,
        inactiveIcon: libraryBeigeIcon,
      },
   
      { 
        path: "/Reports", 
        text: "Reports",
        activeIcon: reportsYellowIcon,
        inactiveIcon: reportsBeigeIcon,
      },
      { 
        path: "/Settings", 
        text: "Settings", 
        activeIcon: settingsYellowIcon,
        inactiveIcon: settingsBeigeIcon,
      },
      { 
        path: "/Profile",
        text: "Profile",
        activeIcon: profileYellowIcon,
        inactiveIcon: profileBeigeIcon,
      }
    ];

    const handleLinkClick = (index) => {
        setActiveLink(index);
    };

    return (
        <nav className="h-screen w-64 bg-custom-brownnav flex flex-col  border-r shadow-[0_0_15px_#AEA9A9]">
          
          <h1 className="text-3xl font-bold pt-10 px-4 text-custom-yellow ">KWISAYSAYAN</h1>
          <h2 className="text-lg font-semibold px-4  text-custom-brownbg">Naevis</h2>

           {/* Add Create Button here */}

          

          <div className="space-y-4 mt-14 ">
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={link.path}
                    className={`flex items-center px-4 py-2 rounded ${activeLink === index ? "bg-custom-grey text-custom-yellow font-semibold shadow-custom-shadow" : "font-semibold text-custom-brownbg"} hover:bg-custom-brownnav hover:text-custom-yellow text-lg`}
                    onClick={() => handleLinkClick(index)}
                >
                    {link.activeIcon && (
                        <img 
                            src={activeLink === index ? link.activeIcon : link.inactiveIcon} 
                            alt={link.text} 
                            className="w-6 h-6 mr-2" 
                        />
                    )}
                    <span>{link.text}</span>
                </Link>
                
            ))}
          </div>  
        </nav>
    );
}

export default Nav;
