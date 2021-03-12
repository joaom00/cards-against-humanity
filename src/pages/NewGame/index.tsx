import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const NewGame: React.FC = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  useEffect(() => {
    const room = `${Math.floor(Math.random() * 999999)}`.padStart(6, '0');
    setRoom(room);
  }, []);

  return (
    <S.Background>
      <S.Container>
        <S.Header>
          <h1>{room}</h1>
          <p>
            Compartilhe esse código para que outras pessoas entrem na sua sala
          </p>
        </S.Header>

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
              readOnly
              value={room}
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

export default NewGame;
