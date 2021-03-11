import * as S from './styles';

const InsertCode: React.FC = () => {
  return (
    <S.Background>
      <S.Container>
        <S.InputContainer>
          <div className="input-block">
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Nome" />
          </div>

          <div className="input-block">
            <label htmlFor="code">Código da sala</label>
            <input type="text" id="code" placeholder="Código" />
          </div>
        </S.InputContainer>

        <button>Entrar na sala</button>
      </S.Container>
    </S.Background>
  );
};

export default InsertCode;
