import styled from 'styled-components';
import EachPageTop from '../../../elements/EachPageTop';

const Wrapper = styled.div`
  p {
    font-size: 50px;
    font-weight: 400;
    line-height: 60px;
  }
`;

function ChiaYenWangTop() {
  return (
    <Wrapper>
      <EachPageTop title="Chia Yen Wang" subTitle="フロントエンドエンジニア" src="../assets/Main_Chia_Yen_Wang.png">
        思いやりと学びを大切にしながら、自社プロダクトを育てていく。
      </EachPageTop>
    </Wrapper>
  );
}

export default ChiaYenWangTop;
