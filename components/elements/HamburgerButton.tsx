import styled from 'styled-components';

type Props = {
  isOpen: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const ButtonStyle = styled.button<Props>`
  position: relative;
  width: 38px;
  height: 45px;
  z-index: 101;
  background: transparent;
  border: none;
  cursor: pointer;

  span {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    display: inline-block;
    width: 100%;
    height: 4px;
    border-radius: 10px;
    background-color: ${({ isOpen }) => (isOpen ? '#fff' : '#ff388a')};

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? 'translate(0, 0) rotate(-45deg)' : 'translate(0, -15px)')};
    }
    &:nth-child(2) {
      transform: translate(0, 15px);
      display: ${({ isOpen }) => (isOpen ? 'none' : 'inline')};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? 'translate(0, 0) rotate(45deg)' : 'translate(0, 0px)')};
    }
  }
`;

const HamburgerButton: React.FC<Props> = ({ isOpen, onClick }) => {
  return (
    <ButtonStyle type="button" isOpen={isOpen} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </ButtonStyle>
  );
};

export default HamburgerButton;
