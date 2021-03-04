import React from 'react';
import './styles/Bage.css';
import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';

class Badge extends React.Component {
    render() {
    const {
    firstName,
    lastName,
    jobTitle,
    twitter
    } = this.props;
    return (
    <div className="Badge">
        <div className="Badge_header">
        <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge_section-name">
        <Gravatar
            className="Badge_avatar"
            email={this.props.email}
            alt="Avatar"
        />
        <h1>
            {firstName} <br /> {lastName}
        </h1>
        </div>

        <div className="Badge_section-info">
        <h3>{jobTitle}</h3>
        <div>@{twitter}</div>
        </div>

        <div className="Badge_footer">#platziconf</div>
    </div>
    );
}
}

export default Badge;