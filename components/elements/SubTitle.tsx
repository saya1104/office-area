import type { ReactNode } from 'react';
import styled from 'styled-components';
import { sp } from '../../styles/breakPoint';

const SubTitleStyle = styled.div`
  border-bottom: solid 2px #ff318f;
  h5 {
    line-height: 1.5;
    color: #ff318f;
    font-size: 40px;
    margin: 70px 0 20px 0;
    font-weight: 200;
    ${sp`
      font-size:25px;
    `}
  }
  br {
    &.br-sp {
      display: none;
    }
    ${sp`
      &.br-sp{
        display:block;
      }
    `}
  }
`;

type Props = {
  children: ReactNode;
};

export const SubTitle: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <SubTitleStyle>
      <h5>{children}</h5>
    </SubTitleStyle>
  );
};
