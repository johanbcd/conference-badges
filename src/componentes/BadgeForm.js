import React from 'react';


class BadgeFrom extends React.Component {
    /**state  = {};
    handleChange = (e) => {//escucha los cambios en el input y muestra su valor
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    Se pasa el estado de éste componenete al BadgeNew que contiene a los demas componentes y asi porder compartir los estados de los componentes entre si
    */
    handleClick = (e)=>{//escucha cuando se da clcik al boton
        console.log("Button was clicked");
    }
    /**handleSubmit = (e)=>{//para evitar que se recargue la pagina se pausa el envio del formulario.
        e.preventDefault();
        console.log("Form was submitted");
        console.log(this.state);
    }*/
    render() {
        return (
            <div>
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                <label>First Name</label>
                <input
                    onChange={this.props.onChange}
                    className="form-control"
                    type="text"
                    name="firstName"
                    value={this.props.formValues.firstName}
                />
                </div>

                <div className="form-group">
                <label>Last Name</label>
                <input
                    onChange={this.props.onChange}
                    className="form-control"
                    type="text"
                    name="lastName"
                    value={this.props.formValues.lastName}
                />
                </div>

                <div className="form-group">
                <label>Email</label>
                <input
                    onChange={this.props.onChange}
                    className="form-control"
                    type="email"
                    name="email"
                    value={this.props.formValues.email}
                />
                </div>

                <div className="form-group">
                <label>Job Title</label>
                <input
                    onChange={this.props.onChange}
                    className="form-control"
                    type="text"
                    name="jobTitle"
                    value={this.props.formValues.jobTitle}
                />
                </div>

                <div className="form-group">
                <label>Twitter</label>
                <input
                    onChange={this.props.onChange}
                    className="form-control"
                    type="text"
                    name="twitter"
                    value={this.props.formValues.twitter}
                />
                </div>

                <button onClick={this.handleClick} className="btn btn-primary">
                Save
                </button>
                {this.props.error && <p className="text-danger">{this.props.error.message}</p> }
            </form>
            </div>
        );
    }
}
export default BadgeFrom;