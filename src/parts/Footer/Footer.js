import React, { Component } from "react";

import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import mailIcon from "../../assets/icons/mail.svg";

import  "./Footer.css"

class Footer extends Component {

    render() {
        return (
            <div className="footer-container-wrapper">
                <p className="footer-container-wrapper__footer-role">Johnson Mwakazi - Software engineer</p>
                <div className="footer-container-wrapper__footer-social-links">
                    <a href="https://github.com/jmwakz99" target="__blank">
                        <img src={githubIcon}  alt="My Github Page" />
                    </a>
                    <a href="https://www.linkedin.com/in/johnson-mwakazi-0a9a8b1a8/" target="__blank">
                        <img src={linkedinIcon}  alt="My Linkedin Page" />
                    </a>
                    <a href="mailto:mwanjilajohnson@gmail.com" target="__blank">
                        <img src={mailIcon}  alt="Send me email" />
                    </a>

                </div>

            </div>
        )
    }
}

export default Footer
