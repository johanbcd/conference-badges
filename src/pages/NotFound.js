import React from "react";
import NotFoundLogo from '../images/404.svg';
import '../pages/styles/NotFound.css';

class NotFound extends React.Component{
    render(){
        return (
            <div className="NotFound__container">
                <div className="NotFound__container-image">
                    <img src={NotFoundLogo} alt=""/>
                </div>
            </div>
        );
    }
}
export default NotFound;