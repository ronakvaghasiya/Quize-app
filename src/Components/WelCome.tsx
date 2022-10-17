import React from 'react';
import './style.css';
import { useHistory } from "react-router-dom";

const Welcome = () => {
    const history = useHistory();
    return (
        <>
            <div className='welcome_page'>
                <div>
                    <h2>
                        Welcome Quiz
                    </h2>
                    <button onClick={() => history.push('/quiz')} className='start'>
                        Start the Quiz
                    </button>

                </div>
            </div>
        </>
    )
}

export default Welcome;