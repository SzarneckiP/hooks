import React from 'react';
import { getSingle } from '../utils';

export default class ClassComponentsExample extends React.Component {
    state = {
        data: {}
    };

    componentDidMount() {
        console.log('[ClassComponentExample] newData recomputing in componentDidMount:',);

        const data = getSingle(this.props.id);
        this.setState({ data });
    };

    componentDidUpdate(prevProps) {
        console.log('[ClassComponentExample] newData recomputing in componentDidUpdate:')
        if (prevProps.id !== this.props.id) {
            const data = getSingle(this.props.id);
            this.setState({ data });
        }
    };

    render() {
        return (
            <pre>
                ClassComponentsExample
                {JSON.stringify(this.state.data, null, 2)}
            </pre>

        );
    }
}

