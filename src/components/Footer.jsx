import React from "react";
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear,faListCheck,faCalendar,faMessage,faCoins,faChartLine,faCreditCard } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return(<>
    
    <div className="mobile__border">
            <div className="mobile__screen">

                <div className="mobile__header">
                    <h1>Financial Roadmap</h1>
                </div>

                <div className="mobile__footer">
                    <div className="mobile__icons">
                        <a className="menu-link" href="/"><FontAwesomeIcon icon={faListCheck} /></a>
                    </div>
                    <div className="mobile__icons">
                        <a className="menu-link" href="/Calendar"><FontAwesomeIcon icon={faCalendar} /></a>
                    </div>
                    <div className="mobile__icons">
                        <a className="menu-link" href="/Messages"><FontAwesomeIcon icon={faMessage} /></a>
                        
                    </div>
                    <div className="mobile__icons">
                        <a className="menu-link" href="/Config"><FontAwesomeIcon icon={faGear} /></a>
                    </div>
                </div>
            </div>
    </div>
    </>)
}

export default Footer;