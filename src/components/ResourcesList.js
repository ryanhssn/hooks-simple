import React, { Component } from 'react';
import axios from 'axios';

class ResourcesList extends Component {

    state = {
        resources: [],
    }


    getResources = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${this.props.resource}`);
        this.setState({
            resources: response.data,
        })
    }

    componentDidMount() {
      this.getResources();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.resource !== this.props.resource) {
            this.getResources();
        }
    }

    render() {
        return <div>{this.state.resources.length}</div>
    }
}

export default ResourcesList;