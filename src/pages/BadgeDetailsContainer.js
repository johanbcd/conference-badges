import React from 'react';

import PageLoading from '../componentes/PageLoading';
import PageError from '../componentes/PageError';
import BadgeDetails from './BadgeDetails'
import api from '../api';

class BadgeDetailsConitainer extends React.Component {
state = {
    loading: true,
    error: null,
    data: undefined,
    modalIsOpen: false,
};

componentDidMount() {
    this.fetchData();
}

fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
    const data = await api.badges.read(this.props.match.params.badgeId);
    this.setState({ loading: false, data: data });
    } catch (error) {
    this.setState({ loading: false, error: error });
    }
};

handleOpenModal = (e) =>{
    this.setState({modalIsOpen: true})
}
handleCloseModal = (e) =>{
    this.setState({modalIsOpen: false})
}
handleOnDeleteBadge = async(e) =>{
    this.setState({loading: true, error: null});

    try {
        await api.badges.remove(this.props.match.params.badgeId)
        this.setState({loading: false})
        this.props.history.push('/badges');
    } catch (error) {
        this.setState({loading: false, error:error})
    }
}
render() {
    if (this.state.loading) {
    return <PageLoading />;
    }

    if (this.state.error) {
    return <PageError error={this.state.error} />;
    }

    return <BadgeDetails
            badge={this.state.data}
            onCloseModal={this.handleCloseModal}
            onOpenModal={this.handleOpenModal}
            modalIsOpen={this.state.modalIsOpen}
            onDeleteBadge={this.handleOnDeleteBadge}
        />
    }
}

export default BadgeDetailsConitainer;