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

class Home extends Component {

    render() {
        return (
            <div>
                <h1>Johnson Mwakazi</h1>
                 <div className="about-me">
                     <div className="about-me__row">
                         <div className="about-me__col-description">
                            <p>Hi, I'm <strong>Johnson Mwakazi</strong>, a self-taught software developer. To say that I love programming is a BIG understatement, I spend almost every waking hour building something fun or watching tech talks. <strong>Currently I'm a frontend web developer</strong> and I use tools like React and Vue.</p>
                            <p>I'm interested in web development, machine learning, networking, quantum computing, physics, electronics, and many outdoor sports.</p>
                            <p>My motto is <strong>"Master the skills you use today and develop the skills you need tomorrow."</strong></p>
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

export default Home
