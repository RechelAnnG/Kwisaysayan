import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import libraryBeigeIcon from '../assets/images/libraryBeige-icon.png';
import libraryYellowIcon from '../assets/images/libraryYellow-icon.png';
import studentsBeigeIcon from '../assets/images/studentsBeige-icon.png';
import reportsBeigeIcon from '../assets/images/reportsBeige-icon.png';
import reportsYellowIcon from '../assets/images/reportsYellow-icon.png';
import settingsBeigeIcon from '../assets/images/settingsBeige-icon.png';
import settingsYellowIcon from '../assets/images/settingsYellow-icon.png';
import profileBeigeIcon from '../assets/images/profileBeige-icon.png';
import profileYellowIcon from '../assets/images/profileYellow-icon.png';


function Nav({ activeLink, setActiveLink }) {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const location = useLocation(); // Get the current location

    const links = [
      { 
        path: "/Library", 
        text: "Library", 
        activeIcon: libraryYellowIcon,
        inactiveIcon: libraryBeigeIcon,
        submenu: [
          { text: "Question Bank", path: "/Library/QuestionBank" }
        ]
      },
      { 
        path: "/Students", 
        text: "Students", 
        activeIcon: libraryYellowIcon,
        inactiveIcon: studentsBeigeIcon,
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

    const handleLibraryClick = () => {
        setShowSubmenu(prevState => !prevState); // Toggle submenu visibility
    };

    return (
        <nav className="h-screen w-64 bg-custom-brownnav flex flex-col border-r shadow-[0_0_15px_#AEA9A9]">
          
          <h1 className="text-3xl font-bold pt-10 px-4 text-custom-yellow ">KWISAYSAYAN</h1>
          <h2 className="text-lg font-semibold px-4 text-custom-brownbg">Naevis</h2>

          <div className="space-y-4 mt-14">
            {links.map((link, index) => (
                <div key={index}>
                    {/* For Library, toggle the submenu on click */}
                    <Link
                        to={link.path}
                        className={`flex items-center px-4 py-2 rounded ${
                            location.pathname === link.path ? "text-custom-yellow font-semibold" : "font-semibold text-custom-brownbg"
                        } hover:bg-white hover:text-custom-yellow text-lg`}
                        onClick={() => {
                            handleLinkClick(index);
                            if (link.text === "Library") handleLibraryClick(); // Toggle submenu for Library
                        }}
                    >
                        {link.activeIcon && (
                            <img 
                                src={location.pathname === link.path ? link.activeIcon : link.inactiveIcon} 
                                alt={link.text} 
                                className="w-6 h-6 mr-2" 
                            />
                        )}
                        <span>{link.text}</span>
                    </Link>

                    {/* Show submenu only if it's the Library link and the submenu is toggled */}
                    {link.submenu && showSubmenu && (
                        <div className="ml-8 space-y-2">
                            {link.submenu.map((submenu, idx) => (
                                <Link 
                                    key={idx} 
                                    to={submenu.path} 
                                    className={`block px-4 py-2 rounded ${
                                        location.pathname === submenu.path ? "text-custom-yellow font-semibold" : "text-custom-brownbg"
                                    } hover:bg-custom-grey hover:text-custom-yellow`}
                                >
                                    {submenu.text}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
          </div>  
        </nav>
    );
}

export default Nav;
