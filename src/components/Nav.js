import React from 'react'
import { FaAlignJustify } from 'react-icons/fa'

const Nav = () => {
    const[state, setState]=React.useState(true)
    return (
        <nav className="navbar">

            <div className='container'>
                <div className="navbar_container">
                {state ?(<ul className="navbar__right">
                    <li><a href="src/components/Banner.js">Home</a></li>
                    <li><a href='src/components/About.js'>About</a></li>
                    <li><a href='src/components/Projects.js'>Projects</a></li>
                    <li><a href='src/components/Skills.js'>Skills</a></li>
                  
                    </ul>):("")}
 
                </div>

            </div>
            <div className="toggle" onClick={()=> setState(!state)}>
                
                 <FaAlignJustify/>
            </div>
        </nav>
    )
}

export default Nav
