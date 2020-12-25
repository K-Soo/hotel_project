import React from 'react';
import Button from 'lib/styles/Button';
import styled from 'styled-components';
import { RiCloseLine } from 'react-icons/ri';
import {
  ModalBlock,
  Containers,
  Header,
  StyledRiCloseLine,
  ErrorMessage,
} from 'components/auth/StyledModal';
import { RiUser5Fill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';
import { IoMdPhonePortrait } from 'react-icons/io';

const Main = styled.div`
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
  p {
    margin-left: auto;
    padding: 0.2rem 0;
    color: #666666;
    font-size: 14px;
  }
  ${({ theme }) => theme.Mobile`
    width: 300px;
  `}
`;

const InputBox = styled.div`
  height: 30px;
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
  .ReserveIcon {
    position: absolute;
    font-size: 1.5rem;
    color: #8a8a8a;
    right: 5px;
    bottom: 0;
    top: 0px;
  }
`;

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

const MyReserveModal = ({ isOpen, onChange, onSubmit, error }) => {
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
              <StyledInput
                type='text'
                name='buyerName'
                onChange={onChange}
                placeholder='구매자 이름'
              />
              <RiUser5Fill className='ReserveIcon' />
            </InputBox>
            <InputBox>
              <label htmlFor='phone' />
              <StyledInput
                type='tel'
                pattern='[0-9]{9,11}'
                name='buyerPhon'
                required
                maxlength='12'
                placeholder='구매자 휴대폰&nbsp;(9~12숫자)'
                onChange={onChange}
              />
              <IoMdPhonePortrait className='ReserveIcon' />
            </InputBox>
            <InputBox>
              <label htmlFor='email' />
              <StyledInput
                type='email'
                name='buyerEmail'
                required
                placeholder='구매자 이메일'
                onChange={onChange}
              />
              <MdEmail className='ReserveIcon' />
            </InputBox>
            <Button>예약조회</Button>
          </Main>
        </form>
      </Containers>
    </ModalBlock>
  );
};

export default MyReserveModal;
