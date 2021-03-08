import React from 'react';
import {Link} from 'react-router-dom';
import platziconfLogoImage from '../images/tech.svg';
import astronautsImage from '../images/web-devices.svg';

import './styles/Home.css';

class Home extends React.Component{
    render(){
        return(
            <div className="Home">
        <div className="container">
            <div className="row">
                <div className="Home__col col-12 col-md-4">
                    <img
                    src={platziconfLogoImage}
                    alt="Conf Logo"
                    className="img-fluid md-6 Home__col-img"
                    />

                    <h2>Badge Management System</h2>
                    <Link className="btn btn-primary" to="/badges">
                    Start
                    </Link>
                </div>
                <div className="Home__col d-none d-md-block col-md-8">
                    <img
                    src={astronautsImage}
                    alt="Astronauts"
                    className="img-fluid p-4"
                    />
                </div>
            </div>
        </div>
        </div>
        );
    }
}
export default Home;