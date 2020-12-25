import React from 'react';
import styled from 'styled-components';
import Button from '../../lib/styles/Button';
import { RiCloseLine } from 'react-icons/ri';
import { HiUser } from 'react-icons/hi';
import { RiLockPasswordFill, RiUser5Fill } from 'react-icons/ri';
import { IoMdPhonePortrait } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
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
  margin: 0 auto;
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
  }
`;

const Main = styled.div`
  position: relative;
  margin: 0.4rem 3rem;
  height: 500px;
  width: 300px;
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
    bottom: 20%;
    button {
      width: 100%;
    }
    p {
      padding: 0.2rem 0;
      color: #666666;
      font-size: 14px;
    }
  }
  ${({ theme }) => theme.Mobile`
    width: 250px;
  `}
`;

const RegisterModal = ({ isOpen, onSubmit, onChange, error }) => {
  return (
    <div>
      <ModalBlock>
        <Containers>
          <Header>
            <StyledRiCloseLine>
              <RiCloseLine onClick={isOpen} />
            </StyledRiCloseLine>
            <i />
          </Header>
          <form onSubmit={onSubmit} autoComplete='off'>
            <Main>
              {error && <ErrorMessage>{error}</ErrorMessage>}
              <InputBox>
                <label htmlFor='username'></label>
                <StyledInput
                  type='text'
                  name='userId'
                  required
                  onChange={onChange}
                  placeholder='아이디&nbsp;(20글자이내)'
                  autoComplete='off'
                />
                <RiUser5Fill className='AuthIcon' />
              </InputBox>

              <InputBox>
                <label htmlFor='password' />
                <StyledInput
                  type='password'
                  onChange={onChange}
                  name='password'
                  required
                  placeholder='비밀번호'
                  autoComplete='new-password'
                />
                <RiLockPasswordFill className='AuthIcon' />
              </InputBox>

              <InputBox>
                <label htmlFor='passwordConfirm' />
                <StyledInput
                  type='password'
                  name='passwordConfirm'
                  required
                  onChange={onChange}
                  placeholder='비밀번호 확인'
                  autoComplete='new-password'
                />
                <RiLockPasswordFill className='AuthIcon' />
              </InputBox>

              <InputBox>
                <label htmlFor='name' />
                <StyledInput
                  type='text'
                  name='name'
                  required
                  placeholder='이름'
                  onChange={onChange}
                />
                <HiUser className='AuthIcon' />
              </InputBox>

              <InputBox>
                <label htmlFor='phone' />
                <StyledInput
                  type='tel'
                  name='phone'
                  pattern='[0-9]{9,11}'
                  required
                  placeholder='휴대폰&nbsp;(9~12숫자)'
                  onChange={onChange}
                />
                <IoMdPhonePortrait className='AuthIcon' />
              </InputBox>

              <InputBox>
                <label htmlFor='email' />
                <StyledInput
                  type='email'
                  name='email'
                  required
                  placeholder='이메일'
                  onChange={onChange}
                />
                <MdEmail className='AuthIcon' />
              </InputBox>
              <div className='buttonBlock'>
                <Button>가입</Button>
              </div>
            </Main>
          </form>
        </Containers>
      </ModalBlock>
    </div>
  );
};

export default RegisterModal;
