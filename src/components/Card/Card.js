import React, { Component } from 'react'

import friyayWebsite  from '../../assets/images/friyay.png'
import utallyWebsite  from '../../assets/images/utally.png'
import portfolioWebsite  from '../../assets/images/portfolio.png'
import githubIcon  from '../../assets/icons/githublink.svg'
import linkIcon  from '../../assets/icons/link.svg'


import './Card.css'
class Card extends Component {
    render() {
        return (
            <div className="card-container-wrapper">
                {
                    friyayWebsite ?    <div className="card-container-wrapper__card">
                    <div className="card-container-wrapper__card__image-container">
                        <img src={friyayWebsite} alt="Friyay" className="card-container-wrapper__card__image-container__image"  />
                      

                    </div>
                    <p className="card-container-wrapper__card__description">Friyay is a software to help teams of all types manage work. Worked as a frontend engineer and the technologies that I used were React and Redux.</p>
                    <div className="card-container-wrapper__card__icons-container-wrapper">
                        <a href="https://www.friyay.io/"  target="_blank"  rel="noreferrer" title="visit site">
                            <img src={linkIcon} alt="Github Icon" className="card-container-wrapper__card__icons-container-wrapper__icon" />

                        </a>
                       
                        
                       

                    </div>
                  
                </div> : null
                }
                {
                    utallyWebsite ? <div className="card-container-wrapper__card">
                    <div className="card-container-wrapper__card__image-container">
                        <img src={utallyWebsite} alt="Friyay" className="card-container-wrapper__card__image-container__image"  />

                    </div>
                    <p className="card-container-wrapper__card__description">U-tally is an ecommerce site for selling gift cards. This is a site I created for my client. The technologies that I used were React, Redux, Css and Firebase.</p>
                    <div className="card-container-wrapper__card__icons-container-wrapper">
                        {/* <a href="/">
                            <img src={githubIcon} alt="Github Icon" className="card-container-wrapper__card__icons-container-wrapper__icon" />
                            
                        </a> */}
                        <a href="https://u-tally.com/" target="_blank"  rel="noreferrer" title="visit site">
                            <img src={linkIcon} alt="Github Icon" className="card-container-wrapper__card__icons-container-wrapper__icon" />

                        </a>
                       
                        
                       

                    </div>
                    
                  
                </div> : null

                }
                {
                    portfolioWebsite ?     <div className="card-container-wrapper__card">
                    <div className="card-container-wrapper__card__image-container">
                        <img src={portfolioWebsite} alt="Friyay" className="card-container-wrapper__card__image-container__image"  />

                    </div>
                    <p className="card-container-wrapper__card__description">This is my portfolio site. The technologies that I used were React and Css.</p>
                    <div className="card-container-wrapper__card__icons-container-wrapper">
                        <a href="https://github.com/jmwakz99/my-portfolio-site" target="_blank"  rel="noreferrer" title="view source code">
                            <img src={githubIcon} alt="Github Icon" className="card-container-wrapper__card__icons-container-wrapper__icon" />
                            
                        </a>
                        <a href="https://my-portfolio-6e122.firebaseapp.com/" target="_blank"  rel="noreferrer" title="view website">
                            <img src={linkIcon} alt="Github Icon" className="card-container-wrapper__card__icons-container-wrapper__icon" />

                        </a>
                       
                        
                       

                    </div>
                    
                  
                </div> : null

                }
                
            
               
            </div>
        )
    }
}

export default Card
