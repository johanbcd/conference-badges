import React from 'react';
import './styles/BadgesList.css';
import Gravatar from './Gravatar';
import {Link} from 'react-router-dom';

function useSearchBadges(badges){
    // hook personalizado. se almacena el estado para pasarlo como valor al input
    const [query, setQuery] =React.useState('');

    //se crea una variable para guardar el estado de los badges
    const[filterBadges, setFilterBadges] = React.useState(badges);

    //useMemo se usa para cargar el badge si ya se ha filtado y si no se para la query otra vez
    React.useMemo(()=>{
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
        });
        setFilterBadges(result)
    },[badges,query]);
    /*const filterBadges = badges.filter(badge => {
        return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
    });*/

    return {query, setQuery, filterBadges}
}
function BadgesList(props){
    const badges = props.badges;

    const {query, setQuery, filterBadges} =  useSearchBadges(badges);
    //preguntamos si el filtrado contiene algo
    if(filterBadges.length ===0){
        return(
        <div>
            <div className="from-group mb-4 Filter_Badges">
                    <label htmlFor="">Filter badges</label>
                    <input type="text" className="form-control"
                        value={query}
                        onChange={(e)=>{
                            //se llama a set cuando se escribe en el input para establecer al valor en el hook y pasalor al value.
                            setQuery(e.target.value);
                        }}
                    />
                </div>
            <h3>No badges were found</h3>
        </div>);
    }
        return (
            <div className="BadgesList">
                <div className="from-group mb-4 Filter_Badges">
                    <label htmlFor="">Filter badges:</label>
                    <input type="text" className="form-control"
                        value={query}
                        onChange={(e)=>{
                            //se llama a set cuando se escribe en el input para establecer al valor en el hook y pasalor al value.
                            setQuery(e.target.value);
                        }}
                    />
                </div>
                <ul className="list-unstyled">
                    {filterBadges.map((badge)=>{
                        return(
                        <li key={badge.id} className="BadgesListItem">
                            <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}/details`}>
                                <Gravatar
                                    className="BadgesListItem__avatar"
                                    email={badge.email}
                                    alt={`${badge.firstname}`}
                                />
                                <div>
                                    <div><strong>{badge.firstName} {badge.lastName}</strong></div>
                                    <div className="Twitter__name">
                                        <span className="Twitter__logo"></span>@{badge.twitter}
                                    </div>
                                    <div>{badge.jobTitle}</div>
                                </div>
                            </Link>
                        </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
export default BadgesList;
