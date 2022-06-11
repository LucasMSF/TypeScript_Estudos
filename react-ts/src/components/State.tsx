import * as React from 'react';

interface IAppProps {
}


const State: React.FunctionComponent<IAppProps> = (props) => {
    const [text, setText] = React.useState('Texto...')

    return (
        <div>
            <h2>Texto: {text}</h2>
            <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} />
        </div>
    )
};

export default State;
