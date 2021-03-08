import React from 'react';
import './styles/Badges.css';
import confLogo from '../images/tech.svg'
import BadgesList from '../componentes/BadgesList';
import {Link} from 'react-router-dom';
import api from '../api';
import PageLoading from '../componentes/PageLoading';
import PageError from '../componentes/PageError'
import MiniLoader from '../componentes/MiniLoader'
class Badges extends React.Component {
    constructor(props) {
        super(props);
        //Aqi debemos generar las partes del estado; data, loading, error
        //console.log('1. constructor()');

        this.state = {
            loading: true,
            data: undefined,
            error: null,
            };
        }
        componentDidMount() { // aqui vamos lanzar la peticion fetch, ahora mimo estan en hardData
        //console.log('3. componentDidMount()');
            this.fetchData();
            //this.intervalId=setInterval(this.fetchData, 5000);
        }
        fetchData= async() =>{
            this.setState({loading: true, error: null});

            try{
                const data = await api.badges.list();
                //cambio de los valores del state
                this.setState({loading:false, data: data});
            }catch(error){
                this.setState({loading:false, error: error});
            }
        }

        componentDidUpdate(prevProps, prevState) {
        //console.log('5. componentDidUpdate()');
        /*console.log({
            prevProps: prevProps,
            prevState: prevState,
        });

        console.log({
            props: this.props,
            state: this.state,
        });*/
        }

        componentWillUnmount() {
        //clearInterval(this.intervalId);
        }

    render(){
        if(this.state.loading===true && !this.state.data){
            return <PageLoading/>
        }
        if(this.state.error){
            return <PageError error={this.state.error}/>
        }
        return(
            <div>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img src={confLogo} alt="confLogo" className="Badges_conf-logo"/>
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/Badges/new" className="btn btn-primary">New Badge</Link>
                    </div>
                    <BadgesList badges={this.state.data}/>
                    {this.state.loading && <MiniLoader/>}
                </div>
            </div>
        )
    }
}
export default Badges;