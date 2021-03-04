import React from 'react';
import './styles/PageError.css';
import Error500 from "../images/500Error.svg";

function PageError(props){

        return (<div className="PageError">
                <img src={Error500} alt="Error500"></img>
                {/*props.error.message*/}
            </div>);
}
export default PageError;