import React from 'react';
import "../componentes/styles/PageLoading.css"
import Loader from '../componentes/Loader';
export default class PageLaoding extends React.Component{
    render() {
        return (
            <div className="PageLoading">
                <Loader/>
            </div>
        );
    }
}