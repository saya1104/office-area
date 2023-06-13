import Image from 'next/image';
import styled from 'styled-components';
import { sp, tablet } from '../../styles/breakPoint';
import type { InterViewType } from '../../features/domains/constants/InterView/InterViewType';

const Wrapper = styled.div`
  margin: 100px 8vw 0 8vw;
  display: flex;
  justify-content: space-between;
  &.isReverse {
    flex-direction: row-reverse;
  }
  ${tablet`
  display:inline-block;
  `}
  ${sp`
  margin:100px 3vw 0 3vw;
  `}
`;

const PcImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40vw;
  ${tablet`
  display:none;
  `}
`;

const SpImageWrapper = styled.div`
  display: none;
  ${tablet`
  display:block;
  margin-top:40px;
  `}
`;

const CommentStyle = styled.div`
  width: 40vw;
  position: relative;
  ${tablet`
  width:84vw;
  margin:0;
  `}
  ${sp`
  width:94vw;
  `}
`;
const NumberStyle = styled.div`
  position: absolute;
  top: 65px;
  left: 10px;
  z-index: -1;
  h3 {
    font-family: 'Inria Sans', sans-serif;
    font-size: 105px;
    font-weight: 700;
    color: #ff328f;
    margin: 0;
    opacity: 0.3;
  }
  ${tablet`
	top:-80px;
  `}
`;

const DetailStyle = styled.div`
  margin-top: 150px;
  z-index: 10;
  h4 {
    line-height: 40px;
    margin: 0;
    font-size: 30px;
    ${tablet`
    margin-top:50px;
    `}
  }
  p {
    line-height: 30px;
  }
  ${tablet`
	margin:0;
  `}
`;

export const MemberInterviews = ({ number, subTitle, text, src, alt }: InterViewType) => {
  return (
    <>
      <Wrapper className={number === '02' || number === '04' ? 'isReverse' : ''}>
        <PcImageWrapper>
          <Image
            src={src}
            alt={alt}
            width={382}
            height={442}
            sizes="100vw"
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </PcImageWrapper>
        <CommentStyle>
          <NumberStyle>
            <h3>{number}</h3>
          </NumberStyle>
          <DetailStyle>
            <h4>{subTitle}</h4>
            <SpImageWrapper>
              <Image
                src={src}
                alt={alt}
                width={382}
                height={442}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </SpImageWrapper>
            <p>{text}</p>
          </DetailStyle>
        </CommentStyle>
      </Wrapper>
    </>
  );
};
