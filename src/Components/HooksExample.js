import React, { useState } from 'react';
import { getSingle } from '../utils';

const HooksExample = ({ id }) => {
    const [data, setData] = useState();

    return (
        <React.Fragment>
            <pre>
                HooksExample
                {JSON.stringify({ data }, null, 2)}
            </pre>
        </React.Fragment>
    );
}

export default HooksExample