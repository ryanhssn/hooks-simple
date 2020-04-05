import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResourcesList = ({resource}) => {

    const [resources, setResources] = useState([]);

    useEffect(() => {
       (async (resource) => {
        const {data} = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`);
        setResources(data)
    })(resource);
    }, [resource])

    return (
        <div>{resources.map(record => <li key={record.id}>{record.title}</li>)}</div>
    );

}

export default ResourcesList;