import * as React from 'react';

interface IAppProps {
    name: string
}

const SecondComponent: React.FunctionComponent<IAppProps> = (props: IAppProps) => {
  return <h2>props.name: {props.name}</h2>;
};

export default SecondComponent;
