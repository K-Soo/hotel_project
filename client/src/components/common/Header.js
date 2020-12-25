import React from 'react';
import styled from 'styled-components';
import AuthNavContainer from 'containers/navigation/AuthNavContainer';
import CategoryNavContainer from 'containers/navigation/CategoryNavContainer';
import DropDown from 'components/common/DropDown';

const HeaderBlock = styled.div`
  position: fixed;
  background: #fff;
  margin: 0 auto;
  border-bottom: 1px solid #19191919;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 9;
`;

const Header = () => {
  return (
    <>
      <HeaderBlock>
        <AuthNavContainer />
        <CategoryNavContainer />
        <DropDown />
      </HeaderBlock>
    </>
  );
};

export default Header;
