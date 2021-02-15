import React from 'react'

const About = () => {
    const[header]=React.useState({
        subHeader:'About Me'});

    return (

        <div>
            <div className="about">
                <div className="container">
                <div className="common">
                    <h1 className="mainHeader">{header.subHeader}</h1>
                    <p className="mainContent">{header.text}</p>
                    
                </div>
                <div className="row h-650 alignCenter">
                    <div className="col-6">
                    <div className="about__img">
                     <img src="https://i.ibb.co/jMqfZ5H/br.jpg" alt="br" border="0" class="me"/>

                   
                     
                     
                </div>

                    </div>
                    <div className="col-6"></div>
                    <div className="about__info">
                        
                    </div>
                    <div className="about__info-p1">
                        <p className="aboutp">I graduated from the University of British Columbia in 2020. As a self-starter I taught myself various programming languages and created projects far beyond the classes I have taken. I am passionate about blockchain and artificial intelligence. I am always learning new concepts through research, workshops, meetups, and online courses; and developing related projects. I landed internships at established companies such as KPMG and Ernst & Young.</p>

                        <br/>
                        <p className="aboutp">Aside from academia and programming, I am passionate about sports,cooking and self-improvement. I am a certified yoga instructor and a blue belt jiu jitsu athlete.</p>
                        

                        <br/>
                        {/* <div className="header__buttons">
                            <a href="/Users/Kantemirovs/Desktop/Canberk Kandemir CV .docx" className="btn btn-outline" download>Download Resume
                            </a>
                        </div> */}

                    </div>

                </div>
                </div>
            </div>
        </div>
    )
}

export default About
