import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourcesList = ({resource}) => {

    const [resources, setResources] = useState([]);

   const getResources = async (resource) => {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        console.log('data', data)
        setResources(data)
    }

    useEffect(() => {
        getResources(resource);
    }, [])

    return <div>{resources.length}</div>

}

export default ResourcesList;