import React from "react";
import './Config.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas,faChevronRight,faUser,faBell,faLock,faCircleInfo,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const Config = () => {
    return(<>
        <div>
            <div className="mobile__config">

                <div className="mobile__language">
                    <div className="language__icon">
                        <p><FontAwesomeIcon icon={faEarthAmericas} /> Language</p>
                    </div>
                    <div className="language__arrow">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>

                <div className="mobile__language">
                    <div className="language__icon">
                        <p><FontAwesomeIcon icon={faUser} /> Personal Information</p>
                    </div>
                    <div className="language__arrow">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>

                <div className="mobile__language">
                    <div className="language__icon">
                        <p><FontAwesomeIcon icon={faBell} /> Notifications and Alerts</p>
                    </div>
                    <div className="language__arrow">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>

                <div className="mobile__language">
                    <div className="language__icon">
                        <p><FontAwesomeIcon icon={faLock} /> Security</p>
                    </div>
                    <div className="language__arrow">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>

                <div className="mobile__language">
                    <div className="language__icon">
                        <p><FontAwesomeIcon icon={faCircleInfo} /> Info</p>
                    </div>
                    <div className="language__arrow">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>

                <div className="mobile__language">
                    <div className="language__icon">
                        <p><FontAwesomeIcon icon={faRightFromBracket} /> Log out</p>
                    </div>
                    <div className="language__arrow">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>


            </div>
        </div>
    </>)
}

export default Config;