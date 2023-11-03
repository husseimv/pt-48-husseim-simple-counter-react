import React from "react";
import './Calendar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Calendar = () => {
    return(<>
        <div>
            <div className="mobile__calendar">

                <div className="mobile__history1">
                    <div className="history__icon">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="history__info">
                        <h3>Roberto Jimenez</h3>
                        <p>11/05/2023 14:25</p>
                    </div>
                    <div className="history__amount">
                        <p>€9.815</p>
                    </div>
                </div>

                <div className="mobile__history2">
                    <div className="history__icon">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="history__info">
                        <h3>Luis Blanco</h3>
                        <p>11/05/2023 15:37</p>
                    </div>
                    <div className="history__amount">
                        <p>€18.587</p>
                    </div>
                </div>

                <div className="mobile__history3">
                    <div className="history__icon">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="history__info">
                        <h3>Sofia Vallejo</h3>
                        <p>11/05/2023 16:14</p>
                    </div>
                    <div className="history__amount">
                        <p>€3.587</p>
                    </div>
                </div>

                <div className="mobile__history4">
                    <div className="history__icon">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="history__info">
                        <h3>Santiago Barrios</h3>
                        <p>11/05/2023 16:22</p>
                    </div>
                    <div className="history__amount">
                        <p>€29.880</p>
                    </div>
                </div>

                <div className="mobile__history5">
                    <div className="history__icon">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="history__info">
                        <h3>Carlos Perez</h3>
                        <p>11/05/2023 17:20</p>
                    </div>
                    <div className="history__amount">
                        <p>€11.059</p>
                    </div>
                </div>


            </div>
        </div>

    </>)
}

export default Calendar;