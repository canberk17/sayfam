import React from 'react'

const Projects = () => {
    const[header]=React.useState({
        subHeader:'Projects'});
    return (
        <div>


    <div className="projects">
    <h1 className="mainHeader">{header.subHeader}</h1> 
   


             <div className="projects" >
                <div className="common">
                    <p className="mainContent">{header.text}</p>
                    </div>
                <div className="container">
                    <div className="col span-1-of-3">
                        <div className="proj-item">
                            <h3>Voice Assistant</h3>
                            <p className="item">
                                <strong>Technologies:</strong>
                                &nbsp; Python, Selenium, Google-API
                            </p>
                            <p className="items">
                    Developed a voice-activated assistant on Python to perform various functions such as translation,
                    google search, playing songs on YouTube, launching programs, quadratic calculations and so forth.  
                            </p>
                           <a href="https://github.com/canberk17/Personal-Assistant-M"><img src="https://i.ibb.co/rkXMN0L/terminal.png" alt="terminal" class="proj-img"/></a> 
                        </div>
                    </div>
                    <div id="port">
                        <div className="proj-item">
                            <h3>Emotion Recognition</h3>
                            <p className="item">
                                <strong>Technologies:</strong>
                                &nbsp; Python, OpenCV, Keras
                            </p>

                            <p className="items">
                                Developed an Emotion Recognition algorithm with OpenCV and keras from Kaggle’s fer2013 database 

                            </p>
                            <a href="https://github.com/canberk17/Emotion-Recognition"><img src="https://i.ibb.co/rkXMN0L/terminal.png" alt="terminal" class="proj-img"/></a>
                            </div>
                            </div>
                
                            <div className="col span-1-of-3">
                            <div className="proj-item">
                            <h3>Wine Classification</h3>
                            <p className="item">
                                <strong>Technologies:</strong>
                                &nbsp; R, KNN
                            </p>

                            <p className="items">Built a KNN classification model in R to classify high-quality white and red wines from Kaggle’s wine data. Performed a heat map to visualize correlations of present chemicals with quality. Achieved 80% accuracy in our predictions.</p>
                            <a href="https://github.com/canberk17/Wine-Classifcation-in-R"><img src="https://i.ibb.co/rkXMN0L/terminal.png" alt="terminal" class="proj-img"/></a>
                            </div>
                            </div>
                            <div className="col span-1-of-3">
                            <div className="proj-item">
                            <h3>ERC20 Token</h3>
                            <p className="item">
                                <strong>Technologies:</strong>
                                &nbsp; Solidity,JavaScript, HTML,CSS,Node,Truffle
                            </p>

                            <p className="items">Created a smart contract  using Solidity and JavaScript. Ran test using Ganache.Built a locally run front-end for the token</p>
                            <a href="https://github.com/canberk17/ERC20-Token"><img src="https://i.ibb.co/hKmctGf/Daco-4206472.png"  alt="terminal" class="proj-img"/></a>
                            </div>
                            </div>
                            <div className="col span-1-of-3">
                        <div className="proj-item">
                            <h3>Uniswap Price Bot</h3>
                            <p className="item">
                                <strong>Technologies:</strong>
                                &nbsp; JavaScript, Infura API,UniswapSDK, Etherscan API, Web3js, Node

                            </p>

                            <p className="items">Developed a price bot that pulls the live price of any ERC20 token against wrapped ethereum(WETH)  from the mainnet and refreshes the price every three seconds.</p>
                            <a href="https://github.com/canberk17/price-bot"><img src="https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=010" alt="terminal" class="proj-img"/></a>
                            </div>
                            </div>
                            <div className="col span-1-of-3">
                        <div className="proj-item">
                            <h3>PUMF Data for Wage Prediction</h3>
                            <p className="item">
                                <strong>Technologies:</strong>
                                &nbsp; STATA

                            </p>

                            <p className="items">Explored the relationship between the level of education and salary: returns to schooling. Performed Multivariate regression with STATA to see the impact of education and on salary by instrumenting the work hours.</p>
                            <a href="https://github.com/canberk17/2016-PUMF"><img src="https://i.ibb.co/rkXMN0L/terminal.png" alt="terminal" class="proj-img"/></a>
                            </div>
                            </div>
                            
                </div>

        </div>
        </div>
        </div>
    )
}

export default Projects
