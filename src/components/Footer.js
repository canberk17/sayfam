import React from 'react'
import {FaTwitter,FaGithub,FaLinkedin} from"react-icons/fa"
import{FiMail} from 'react-icons/fi';


const Footer = () => {
    return (
        <div class='footer'>
            <ul className="footer__ul">
                            <li>
                            <a href="https://twitter.com/itsjoniee" className='links'> <FaTwitter/></a>

                            </li>
                            <li>
                            <a href="https://www.linkedin.com/in/canberkkandemir/" className='links'><FaLinkedin/></a>

                            </li>
                            <li>
                            <a href="https://github.com/canberk17" className='links'> <FaGithub/></a>

                            </li>
                            <li>
                            <a href="mailto:kandemircj@gmail.com" className='links'> <FiMail/></a>

                            </li>
            
                        </ul>
                    <p className='copyright'> &copy; Canberk Kandemir</p>
            
        </div>
        
    )
}

export default Footer
