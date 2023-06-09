import styled from 'styled-components';
import { TeamCoreValueConstants } from '../../../features/domains/constants/TeamCoreValueConstants';
import { sp } from '../../../styles/breakPoint';
import { TeamCoreValueSummary } from '../../layouts/TeamCoreValueSummary';

const SectionStyle = styled.div`
  margin: 0 8vw;
  ${sp`
  margin:0 3vw;
`}
`;

const TeamCoreValueDetail = () => {
  return (
    <SectionStyle>
      {TeamCoreValueConstants.map((item, index) => (
        <TeamCoreValueSummary
          title={item.title}
          subtitle={item.subtitle}
          text={item.text}
          src={item.src}
          alt={item.alt}
          key={index}
        />
      ))}
    </SectionStyle>
  );
};

export default TeamCoreValueDetail;
