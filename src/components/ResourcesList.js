import React from 'react';
import { useResources } from './useResources';

const ResourcesList = ({resource}) => {

    const resources = useResources(resource);

    return (
        <div>{resources.map(record => <li key={record.id}>{record.title}</li>)}</div>
    );

}

export default ResourcesList;