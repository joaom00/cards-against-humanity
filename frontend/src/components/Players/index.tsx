import * as S from './styles';

interface PlayersProps {
  users: Array<{
    id: string;
    name: string;
    room: string;
  }>;
}

const Players: React.FC<PlayersProps> = ({ users }) => {
  return (
    <S.Container>
      <S.Header>
        <p>Jogadores</p>
        <span>{users.length}</span>
      </S.Header>
      <S.Players>
        {users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </S.Players>
    </S.Container>
  );
};

export default Players;
