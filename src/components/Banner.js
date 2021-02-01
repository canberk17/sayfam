import React from 'react'
import {FaFacebookF,FaTwitter,FaGithub,FaLinkedin} from"react-icons/fa"
import{FiMail} from 'react-icons/fi';


function Banner() {
    const[state]=React.useState({title:'I am Canberk Kandemir',text:'A tech savvy developer & entrepreneur'});
    return (
        <header className='header' >
            <div className="container">
                <div className="row"> 
                
                <div className="col-6">
                    <div className="header__content">
                        <div className="header__section">
                        <ul className="header__ul">
                            <li>
                            <a href="https://www.facebook.com/canberk.kandemir.31/" className='links'> <FaFacebookF/></a>

                            </li>
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
                        <h1>{state.title}</h1>
                        <p className='animetext'>{state.text}</p>

                        </div>

                    </div>
                    
                    </div>
                    </div>
               
            </div>
        </header>
    )
}
export default Banner
