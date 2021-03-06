import React from 'react';
import './styles/BadgeEdit.css';
import header from '../images/tech.svg';
import Badge from '../componentes/Badeg';
import BadgeForm from '../componentes/BadgeForm'
import PageLoading from '../componentes/PageLoading';
import api from "../api";
class BadgeEdit extends React.Component{
    /**se crea un estado "general que se encargará de almacenar los estados de los componentes y asi poder parsarlos como props " */
    state ={
        loading: false,
        error: null,
        form:{
            firstName:"",
            lastName:"",
            email:"",
            jobTitle:"",
            twitter:"",
        }
    };
    componentDidMount(){
        this.fetchData();
    }
    fetchData = async () => {
        this.setState({loading:true, errors:null});
        try {
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({loading:false, form: data})
        } catch (error) {
            this.setState({loading:false, error: error})
        }
    }
    handleChange = (e) =>{
        /**
         * Para que los estados de los inputs no se sobreescriban se puede realizar una copia que recuerde al estado actual para no perder el valor.
         * const nextForm=this.state.form;
        nextForm[e.target.name]=e.target.value;*/
        this.setState({
            form: {
                ...this.state.form,[e.target.name]:e.target.value
            },
        })
    }
    handleOnSubmit = async e => {
        e.preventDefault();
        this.setState({loading: true, error: null})
        try {
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({loading: false})
            this.props.history.push('/badges');
        } catch (error) {
            this.setState({loading: false, error: error})
        }
    }

    render(){
        if(this.state.loading===true){
            return <PageLoading/>
        }
        return(
            <div>
                <div className="BadgeEdit__hero">
                    <img className="img-fluid" src={header} alt="Logo"></img>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                firstName={this.state.form.firstName || 'First_Name'}
                                lastName={this.state.form.lastName || 'Last_Name'}
                                twitter={this.state.form.twitter || 'Twitter'}
                                jobTitle={this.state.form.jobTitle|| 'Job_title'}
                                email={this.state.form.email || 'Email'}
                                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                        <h1>Edit Attendant</h1>
                            <BadgeForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                onSubmit={this.handleOnSubmit}
                                error={this.state.error}
                                />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BadgeEdit;