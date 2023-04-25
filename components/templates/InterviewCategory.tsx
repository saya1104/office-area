import styled from 'styled-components';
import { GradationStyle } from '../../styles/Styled';
import { sp } from '../../styles/breakPoint';
import InterviewMember from '../elements/InterviewMember';

const InterviewStyle = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 700px;
  width: 70%;
  ${sp`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `}
  h3 {
    ${GradationStyle}
  }
  p {
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
  }
`;

const MembersListStyle = styled.div`
  display: flex;
`;

const InterviewCategory = () => {
  return (
    <InterviewStyle>
      <h3>INTERVIEW</h3>
      <p>
        メンバー紹介テキスト。メンバー紹介テキスト。メンバー紹介テキスト。メンバー紹介テキスト。メンバー紹介テキスト。
      </p>
      <MembersListStyle>
        <InterviewMember />
      </MembersListStyle>
    </InterviewStyle>
  );
};

export default InterviewCategory;
