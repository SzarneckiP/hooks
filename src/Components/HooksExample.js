import React, { useState, useEffect } from 'react';
import { getSingle } from '../utils';

const HooksExample = ({ id }) => {
    const [data, setData] = useState();

    useEffect(() => {
        const data = getSingle(id);
        setData(data);
    }, [id]);

    return (
        <React.Fragment>
            <pre>
                HooksExample
                {JSON.stringify(data, null, 2)}
            </pre>
        </React.Fragment>
    );
}

export default HooksExample