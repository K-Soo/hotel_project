import styled from 'styled-components';

export const ModalBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`;

export const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  border: 1px solid red;
  height: 25px;
  line-height: 22px;
`;

export const Containers = styled.div`
  margin: 0 auto;
  height: 600px;
  width: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 520px) {
    width: 90%;
    height: 500px;
  }
`;
export const Header = styled.div`
  width: 100%;
  margin: 40px 0 20px;
  i {
    margin: 0 auto;
    background: url(${require('lib/images/sprites.png')}) -5px -157px;
    width: 123px;
    height: 60px;
    display: block;
  }
`;
export const StyledRiCloseLine = styled.div`
  position: absolute;
  display: block;
  font-size: 1.7rem;
  right: 10px;
  top: 10px;
  &:hover {
    transform: scale(1.3);
    transition: all 0.3s ease;
  }
`;
