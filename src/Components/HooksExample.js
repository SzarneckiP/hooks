import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { getSingle, useSingleHook } from '../utils';

const HooksExample = ({ id }) => {
    const [data, setData] = useState();
    const [dummyData, setDummyData] = useState(0);
    const hookData = useSingleHook(id); // use my own hook

    useEffect(() => {
        console.log('[HooksExample] data recomputing in useEffect');
        const data = getSingle(id);
        setData(data);
    }, [id]);

    useEffect(() => {
        console.log('[HooksExample] dummyData recomputing in useEffect');
    }, [dummyData]);

    const memoData = useMemo(() => {
        console.log('Called memoData useMemo callback');
        return getSingle(id);
    }, [id]);

    const handleClick = useCallback(() => {
        setDummyData(dummyData + 1);
    }, [dummyData]);

    return (
        <React.Fragment>
            <pre>
                HooksExample
                {JSON.stringify({ data }, null, 2)}
                {JSON.stringify({ memoData }, null, 2)}
                {JSON.stringify({ hookData }, null, 2)}
            </pre>
            <Button onClick={handleClick}>Change dummy Data</Button>
        </React.Fragment>
    );
}

const Button = React.memo(({ onClick, children }) => {
    console.log({ onClick });
    return <button onClick={onClick}>{children}</button>
});

export default HooksExample