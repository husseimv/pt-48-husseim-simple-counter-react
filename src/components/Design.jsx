import React from "react";
import './Design.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear,faListCheck,faCalendar,faMessage,faCoins,faChartLine,faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Design = () =>{
    return (<>
    
                <div className="mobile__box1">
                    <div className="mobile__text1">
                        <p><FontAwesomeIcon icon={faCoins} /> Net Worth</p>
                        <p>€859.428.000</p>
                    </div>
                </div>

                <div className="mobile__box2">
                    <div className="mobile__text2">
                        <p><FontAwesomeIcon icon={faChartLine} /> Investments</p>
                        <p>€125.658.643</p>
                    </div>
                </div>

                <div className="mobile__box3">
                    <div className="mobile__text3">
                        <p><FontAwesomeIcon icon={faCreditCard} /> Credit</p>
                        <p>€230.850</p>
                    </div>
                </div>
            
    </>)
}

export default Design;