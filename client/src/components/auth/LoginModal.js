import styled from 'styled-components';
import React from 'react';
import Button from 'lib/styles/Button';
import { RiCloseLine } from 'react-icons/ri';
import { RiLockPasswordFill, RiUser5Fill } from 'react-icons/ri';
import {
  ModalBlock,
  Containers,
  Header,
  StyledRiCloseLine,
  ErrorMessage,
} from 'components/auth/StyledModal';

const StyledInput = styled.input`
  font-size: 15px;
  outline: none;
  border: none;
  border-bottom: 1px solid #e5e5e5;
  width: 100%;
  height: 30px;
  &:focus {
    border-color: #8d8d8d;
    color: #383838;
  }
`;

const InputBox = styled.div`
  height: 30px;
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
  .AuthIcon {
    position: absolute;
    font-size: 1.5rem;
    color: #8a8a8a;
    right: 5px;
    bottom: 0;
    top: 0px;
  }
`;

const Main = styled.div`
  position: relative;
  margin: 0.4rem 3rem;
  height: 400px;
  width: 300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  label {
    font-weight: bold;
  }
  .buttonBlock {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30%;
    button {
      width: 100%;
    }
    p {
      padding: 0.2rem 0;
      color: #666666;
      font-size: 14px;
      text-align: right;
    }
  }
  ${({ theme }) => theme.Mobile`
    width: 250px;
  `}
`;

const LoginModal = ({ isOpen, onSubmit, onChange, error }) => {
  return (
    <ModalBlock>
      <Containers>
        <Header>
          <StyledRiCloseLine>
            <RiCloseLine onClick={isOpen} />
          </StyledRiCloseLine>
          <i />
        </Header>
        <form onSubmit={onSubmit}>
          <Main>
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <InputBox>
              <label htmlFor='username'></label>
              <StyledInput type='text' name='userId' onChange={onChange} placeholder='아이디' />
              <RiUser5Fill className='AuthIcon' />
            </InputBox>

            <InputBox>
              <label htmlFor='password'></label>
              <StyledInput
                type='password'
                autoComplete='username'
                onChange={onChange}
                name='password'
                placeholder='비밀번호'
              />
              <RiLockPasswordFill className='AuthIcon' />
            </InputBox>
            <div className='buttonBlock'>
              <Button>로그인</Button>
              <p style={{ margin: '10px auto 5px' }}>회원이 아니신가요?</p>
              <Button Register onClick={isOpen} name='registerBtn'>
                회원가입
              </Button>
            </div>
          </Main>
        </form>
      </Containers>
    </ModalBlock>
  );
};

export default LoginModal;
