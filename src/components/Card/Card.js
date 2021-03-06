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
                <div className="card-container-wrapper__card">
                    <div className="card-container-wrapper__card__image-container">
                        <img src={friyayWebsite} alt="Friyay" className="card-container-wrapper__card__image-container__image"  />
                      

                    </div>
                    <p className="card-container-wrapper__card__description">Nullam tempor urna at nulla eleifend congue feugiat ut lorem. Nam sit amet ullamcorper arcu. Phasellus euismod pellentesque lectus, posuere mattis ante rutrum non.</p>
                    <div className="card-container-wrapper__card__icons-container-wrapper">
                        {/* <a href="/">
                            <img src={githubIcon} alt="Github Icon" className="card-container-wrapper__card__icons-container-wrapper__icon" />
                            
                        </a> */}
                        <a href="https://www.friyay.io/"  target="_blank"  rel="noreferrer" title="visit site">
                            <img src={linkIcon} alt="Github Icon" className="card-container-wrapper__card__icons-container-wrapper__icon" />

                        </a>
                       
                        
                       

                    </div>
                  
                </div>
                <div className="card-container-wrapper__card">
                    <div className="card-container-wrapper__card__image-container">
                        <img src={utallyWebsite} alt="Friyay" className="card-container-wrapper__card__image-container__image"  />

                    </div>
                    <p className="card-container-wrapper__card__description">Nullam tempor urna at nulla eleifend congue feugiat ut lorem. Nam sit amet ullamcorper arcu. Phasellus euismod pellentesque lectus, posuere mattis ante rutrum non.</p>
                    <div className="card-container-wrapper__card__icons-container-wrapper">
                        {/* <a href="/">
                            <img src={githubIcon} alt="Github Icon" className="card-container-wrapper__card__icons-container-wrapper__icon" />
                            
                        </a> */}
                        <a href="https://u-tally.com/" target="_blank"  rel="noreferrer" title="visit site">
                            <img src={linkIcon} alt="Github Icon" className="card-container-wrapper__card__icons-container-wrapper__icon" />

                        </a>
                       
                        
                       

                    </div>
                    
                  
                </div>
                <div className="card-container-wrapper__card">
                    <div className="card-container-wrapper__card__image-container">
                        <img src={portfolioWebsite} alt="Friyay" className="card-container-wrapper__card__image-container__image"  />

                    </div>
                    <p className="card-container-wrapper__card__description">Nullam tempor urna at nulla eleifend congue feugiat ut lorem. Nam sit amet ullamcorper arcu. Phasellus euismod pellentesque lectus, posuere mattis ante rutrum non.</p>
                    <div className="card-container-wrapper__card__icons-container-wrapper">
                        <a href="https://github.com/jmwakz99/my-portfolio-site" target="_blank"  rel="noreferrer" title="view source code">
                            <img src={githubIcon} alt="Github Icon" className="card-container-wrapper__card__icons-container-wrapper__icon" />
                            
                        </a>
                        <a href="https://github.com/jmwakz99/my-portfolio-site" target="_blank"  rel="noreferrer" title="view website">
                            <img src={linkIcon} alt="Github Icon" className="card-container-wrapper__card__icons-container-wrapper__icon" />

                        </a>
                       
                        
                       

                    </div>
                    
                  
                </div>
               
            </div>
        )
    }
}

export default Card
