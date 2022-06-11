import * as React from 'react';

interface IAppProps {
    user: string,
    name: string,
    status: boolean,
    userType: UserTypes
}

//EDU7 Usando Enums
export enum UserTypes {
    Ad = 'Administrador',
    Us = 'Usuário comum'
}

const Destructuring: React.FunctionComponent<IAppProps> = ({user, name, status, userType}: IAppProps) => {
  return (
      <div>
          <p>Usuário: {user}</p>
          <p>Nome do usuário: {name}</p>
          <p>status: {status ? 'Ativo' : 'Inativo'}</p>
          <p>Nível de acesso: {userType}</p>
      </div>
  );
};

export default Destructuring;
