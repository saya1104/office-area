
import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { sp } from '../../../styles/breakPoint';
import EachPageTop from '../../elements/EachPageTop';
import OfficeSpacePage from '../../elements/OfficeSpacePage';
import Header from '../../layouts/Header';


const Wrapper = styled.div`
  margin: 0 8vw;
  ${sp`
    margin:0 3vw;
  `};
`;

const TextStyle = styled.div`
text-align:center;
padding:100px 0 100px 0;
`;

const SectionStyle = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: space-between;
  align-items: center;
  ${sp`
   display:block;
   margin:200px 0 0 30px;;
  `}
`;

const OfficeSpaceStyle = styled.div`
  position: relative;
  width: 520px;
  min-width: 300px;
  margin: 0 10%;
  ${sp`
    margin: 0;
    width:auto;
  `}

  h3 {
    font-weight: 600;
  }
  p {
    font-weight: 400px;
    font-size: 18px;
    line-height: 30px;
    ${sp`
     margin-right:30px;
    `}
  }
`;

const ImagePcStyle = styled.div`
  width: 450px;
  display: block;
  ${sp`
   display:none;
  `}
`;

const Fontsize = styled.div`
font-size:100px;
display: inline;

`;

const Pstyle = styled.p`
margin-bottom:-15px;
`;

const Pstyled = styled.p`
display: inline-block;
margin-left:20px;
`;

const Centerstyle = styled.div`
display:flex;
align-items: center;
`;



function OfficeSpaceDetails() {
    return (
        <>
            <Header />
            <EachPageTop title={'OFFICE SPACE'} subTitle={'働く環境'} src="/assets/ProductHand.png">
                お客様に提供する価値を向上させるために、サービスの利便性を日々追求しています。開発するシステムは多岐に渡り、WEBサイトやWEBアプリケーションに限らず、スマートフォンアプリやそれらを支えるインフラに至るまで、内製化を推進している真っ最中。既存の手法にとらわれず、モダンな技術を積極的に採用していくチャレンジングな環境で開発が行われています。
            </EachPageTop>
            <Wrapper>
                <TextStyle>
                    <h3>アイフルで働く</h3>
                    <div>エンジニアの働くオフィスをご紹介します。</div>
                </TextStyle>
                <OfficeSpacePage
                    area={'Area'}
                    number={'01'}
                    subtitle={'イマーズスペース'}
                    src={'/assets/TeamCoreValuesImage.svg'}
                    message={'外光が入る窓際で、高さ調節のできる広いデスクにより、一人で没入しながら作業できる空間。'}
                    />
                <SectionStyle>
                    <OfficeSpaceStyle>
                        <Pstyle> Area</Pstyle>
                        <Centerstyle>
                            <Fontsize>02 </Fontsize>
                            <Pstyled>ワーキングスペース</Pstyled>
                        </Centerstyle>
                        <p>連結されたデスクにディスプレイが横並びで設置されており、一人で集中して作業したり、軽い打ち合わせをしたりなど多目的に使用できるスペース。</p>
                    </OfficeSpaceStyle>
                    <ImagePcStyle>
                        <Image
                            src="/assets/TeamCoreValuesImage.svg"
                            alt="TEAM CORE VALUES"
                            width={546}
                            height={546}
                            sizes="100vw"
                            style={{
                                width: '100%',
                                height: 'auto',
                            }}
                        />

                    </ImagePcStyle>

                </SectionStyle>

            </Wrapper>
        </>
    );
}
export default OfficeSpaceDetails;
