import React from 'react'

const Skills = () => {
    const[header]=React.useState({
        subHeader:'Skills'});
    return (
        <div>
            <div className="skill">
                <div className="common">

            <h1 className="mainHeader">{header.subHeader}</h1>
            <h1 className='technical'>Programming Languages</h1>
                  
                    <p>Python</p>
        <div className="container">
        <div class="skills python">90%</div>
    </div>
    
                    <p>R</p>
        <div className="container">
        <div class="skills r">70%</div>
    </div>
    <p>JavaScript</p>
        <div class="container">
         <div class="skills js">70%</div>
        </div>
   
                    <p>MySQL</p>
        <div className="container">
        <div class="skills mysql">60%</div>
    </div>
   
                    <p>Julia</p>
        <div className="container">
        <div class="skills julia">60%</div>
    </div>
    
                    <p>Scala</p>
        <div className="container">
        <div class="skills scala">65%</div>
    </div>
   
                    <p>Shell</p>
        <div className="container">
        <div class="skills shell">70%</div>
    </div>
    <br/>

    <h1 className='tools'>Frameworks/Libraries/Tools</h1>
    
                    <p>Node</p>
        <div className="container">
        <div class="skills node">70%</div>
    </div>
                    <p>Git</p>
        <div className="container">
        <div class="skills git">70%</div>
    </div>
    
    
                    <p>React</p>
        <div className="container">
        <div class="skills react">70%</div>
    </div>
    

                    <p>Tableau</p>
            <div className="container">
        <div class="skills tableau">70%</div>
    </div>
    
                    <p>PowerBI</p>
        <div className="container">
        <div class="skills powerbi">80%</div>
    </div>
    <p>Photoshop</p>
        <div className="container">
        <div class="skills photoshop">80%</div>
    </div>


        <p>MongoDB</p>
        <div class="container">
        <div class="skills mongoDB">30%</div>
        </div>
        <p>AWS</p>
        <div class="container">
        <div class="skills aws">30%</div>
        </div>

        <br/>
        
    <h1 className='mark'>Mark Up Languages</h1>

    <p>LaTex</p>
        <div className="container">
        <div class="skills latex">50%</div>
    </div>
    
                    <p>HTML</p>
        <div className="container">
        <div class="skills html">60%</div>
    </div>

            <p>CSS</p>
        <div class="container">
             <div class="skills css">60%</div>
        </div>

  

        </div>
        </div>
        </div>
        
    )
}

export default Skills
