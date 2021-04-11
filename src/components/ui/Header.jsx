import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return ( 
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
                <span className="font-semibold text-xl tracking-tight">iMovie</span>
            </div>
            <div className="block lg:hidden">
                <button 
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <svg className="fill-current h-3 w-3 text-white" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className={"w-full block flex-grow lg:flex lg:items-center lg:w-auto transition duration-500 ease-in-out " + (navbarOpen ? '' : 'hidden')}>
                <div className="text-md lg:flex-grow text-white">
                    <NavLink to="/popular">
                        <span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-purple-300 mx-8">
                            Populars
                        </span>
                    </NavLink>
                    <NavLink to="/upcoming">
                        <span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-purple-300 mx-8">
                            Upcoming
                        </span>
                    </NavLink>
                    <NavLink to="/top_rated">
                        <span className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-purple-300 mx-8">
                            Top Rated
                        </span>
                    </NavLink>
                </div>
                <div>
                    <a href="/" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-purple-200 hover:text-white hover:bg-purple-400 mt-4 mx-8 lg:mt-0">Download App</a>
                </div>
            </div>
         </nav>
     );
}
 
export default Header;