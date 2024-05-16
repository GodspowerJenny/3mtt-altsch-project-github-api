import React from "react"
import { FaHouseUser } from "react-icons/fa";
// import {NavLink} from "react-router-dom"
// commenting out navlink to use {link} alone
import { Link } from "react-router-dom";


function Navbar (){
    return (
        <nav className="navbar">
            <h1>GitHub Portfolio</h1>
            <div className="links">
                <Link to="/"><FaHouseUser/><i class="fa-solid fa-house-user"></i></Link>
                <Link to='/Profile'>Profile</Link>
                <Link to='/Github'>Repositories</Link>

            </div>

        </nav>
        // <div>
    //         {/* <NavLink to="/portfolio"></NavLink>
    // <nav className="nav">
    //     <Link href="/src/components/Hero.js" className="site-tittle"> My Github Portfolio</Link>
    //     <ul>
    //         <li className="active">
    //             <Link href="/src/Pages/Profile.js">Profile</Link>
    //             </li>
    //             <li>
    //             <Link href="/Github"> Repositories</Link>
    //         </li>
    //     </ul>

    // </nav> */}
    // // </div>
    );
}
export default Navbar