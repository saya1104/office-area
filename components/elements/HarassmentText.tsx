import styled from 'styled-components';
import type { GuideType } from '../../features/domains/constants/GuideConstants';

const Headline = styled.div`
  line-height: 30px;
  margin-bottom: 50px;
  h5 {
    color: #ff318f;
    font-size: 20px;
    margin: 0 0 10px 0;
    &::before {
      content: '■';
    }
  }
  a {
    color: #4ef4ff;
  }
`;

const HarassmentText = ({ headline, text }: GuideType) => {
  return (
    <Headline>
      <h5>{headline}</h5>
      <p>{text}</p>
    </Headline>
  );
};

export default HarassmentText;
