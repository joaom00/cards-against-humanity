import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const InsertCode: React.FC = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <S.Background>
      <S.Container>
        <S.InputContainer>
          <div className="input-block">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Nome"
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="code">Código da sala</label>
            <input
              type="text"
              id="code"
              placeholder="Código"
              onChange={(event) => setRoom(event.target.value)}
            />
          </div>
        </S.InputContainer>
        <Link
          onClick={(event) => (!name || !room ? event.preventDefault() : null)}
          to={`/app?name=${name}&room=${room}`}
        >
          <button type="submit" className="join-room-btn">
            Entrar na sala
          </button>
        </Link>
      </S.Container>
    </S.Background>
  );
};

export default InsertCode;
