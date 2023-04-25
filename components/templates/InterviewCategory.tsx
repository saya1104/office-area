import styled from 'styled-components';
import { GradationStyle } from '../../styles/Styled';
import InterviewMember from '../elements/InterviewMember';

const InterviewStyle = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 700px;
  width: 70%;
  h3 {
    ${GradationStyle}
  }
  p {
    font-size: 18px;
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
        {/* <InterviewMember />
        <InterviewMember /> */}
      </MembersListStyle>
    </InterviewStyle>
  );
};

export default InterviewCategory;
