import React, { Component } from "react"

import reactIcon from "../../assets/icons/react.svg"
import javascriptIcon from "../../assets/icons/javascript.svg"
import htmlIcon from "../../assets/icons/html.svg"
import cssIcon from "../../assets/icons/css.svg"
import gitIcon from "../../assets/icons/git.svg"
import reduxIcon from "../../assets/icons/redux.svg"
import vueIcon from "../../assets/icons/vue.svg"

import profile from "../../assets/images/me.jpg"

import "./Home.css"

class Blog extends Component {

    render() {
        return (
            <div>
                <h1>Johnson Mwakazi</h1>
                 <div className="about-me">
                     <div className="about-me__row">
                         <div className="about-me__col-description">
                            <p>Hi, I'm <strong>Konrad Staniszewski</strong>, a fourth year computer engineering student at the Univeristy of Alberta.</p>
                            <p>I'm interested in web development, data visualization, machine learning, embedded systems, networking, quantum computing, 3D printing, physics, electronics, and many outdoor sports.</p>
                         </div>
                         <div className="about-me__col-image">
                             <img src={profile} alt="my-profile" className="about-me__col-image__profile-image"/>

                         </div>


                     </div>

                 </div>
                 <div className="skills">
                     <div className="skills__container-wrapper">
                         <div className="skills__container-wrapper__skills-flex">
                         <div className="skills__container-wrapper__skills-flex__icon-container">
                            <img src={htmlIcon} alt="React Icon" />
                            <span>HTML</span>

                           </div>
                           <div className="skills__container-wrapper__skills-flex__icon-container">
                            <img src={cssIcon} alt="React Icon" />
                            <span>CSS</span>

                           </div>
                           <div className="skills__container-wrapper__skills-flex__icon-container">
                            <img src={javascriptIcon} alt="React Icon" />
                            <span>Javascript</span>

                           </div>
                           <div className="skills__container-wrapper__skills-flex__icon-container">
                                <img src={gitIcon} alt="React Icon" />
                                <span>Git</span>
                           

                            </div>
                          
                          
                           
                         
                           
                          

                         </div>


                         <div className="skills__container-wrapper__skills-flex">
                          <div className="skills__container-wrapper__skills-flex__icon-container">
                            <img src={reactIcon} alt="React Icon" />
                            <span>React</span>

                           </div>
                           <div className="skills__container-wrapper__skills-flex__icon-container">
                               <img src={reduxIcon} alt="Redux Icon" />
                               <span>Redux</span>

                            </div>
                            <div className="skills__container-wrapper__skills-flex__icon-container">
                                <img src={vueIcon} alt="React Icon" />
                                <span>Vue</span>
                           

                            </div>
                            <div className="skills__container-wrapper__skills-flex__icon-container">
                                <img src={vueIcon} alt="React Icon" />
                                <span>Vuex</span>
                           

                            </div>
                           
                           
                          
                    
                          
                           
                          

                         </div>

                     </div>

                 </div>
            </div>
        )
    }
}

export default Blog
