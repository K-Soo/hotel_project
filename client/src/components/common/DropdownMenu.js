import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { BsChevronDoubleRight, BsChevronDoubleLeft } from 'react-icons/bs';
import Button from 'lib/styles/Button';
const Menu = styled.div`
  .handler {
    text-align: right;
    padding: 5px 10px;
    border-bottom: 1px solid #777;
  }
  //Main
  &.menu-primary-enter {
    transform: translateX(-110%);
  }
  &.menu-primary-enter-active {
    transform: translateX(0%);
    transition: all 0.5s ease;
  }
  &.menu-primary-exit {
    position: absolute;
  }
  &.menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all 0.5s ease;
  }
  //secondary
  &.menu-secondary-enter {
    transform: translateX(110%);
  }
  &.menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all 0.5s ease;
  }
  &.menu-secondary-exit {
  }
  &.menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all 0.5s ease;
  }
`;

const StyledDropdownMenu = styled.div`
  position: absolute;
  width: 100%;
  right: 0;
  top: 95px;
  height: ${({ menuHeight }) => menuHeight};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: height 0.5s, transform 0.5s ease;
  overflow: hidden;
  background-color: #fff;
  border: solid #666;
  border-width: 1px 0 1px 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

const StyledDropdownItem = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid #ccc;
  font-weight: 600;
  a {
    padding-left: 20px;
    flex: 1 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .icon-right {
    font-size: 16px;
    line-height: 15px;
    position: absolute;
    right: 20px;
    color: #8d8d8d;
  }
  .icon-left {
    font-size: 16px;
    color: #8d8d8d;
    line-height: 10px;
    padding: 0 10px;
  }

  &:hover {
    color: #3f6299;
  }
  ${props =>
    props.category &&
    css`
      font-weight: 500;
      background-color: #f5f5f5;
      color: #333;
      &:hover {
        transform: none;
        color: #333;
      }
    `}
`;

const DropdownMenu = ({ open, isOpen }) => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  const calcHeight = el => {
    const height = `${el.offsetHeight}px`;
    setMenuHeight(height);
  };

  const DropdownItem = ({ goToMenu, link, rightIcon, leftIcon, children, isOpen, ...props }) => {
    return (
      <StyledDropdownItem {...props}>
        <Link to={link} className='menu-item' onClick={() => goToMenu && setActiveMenu(goToMenu)}>
          <span className='icon-left'>{leftIcon}</span>
          {children}
          <span className='icon-right'>{rightIcon}</span>
        </Link>
      </StyledDropdownItem>
    );
  };

  return (
    <StyledDropdownMenu open={open} menuHeight={menuHeight}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        classNames='menu-primary'
        timeout={500}
        onEnter={calcHeight}
      >
        <Menu>
          <div className='handler'>
            <Button bookingButton>
              <Link to='/reservation/main'>예약하기</Link>
            </Button>
          </div>
          <DropdownItem goToMenu='about' rightIcon={<BsChevronDoubleRight />} link='#'>
            호텔소개
          </DropdownItem>
          <DropdownItem goToMenu='rooms' rightIcon={<BsChevronDoubleRight />} link='#'>
            객실
          </DropdownItem>
          <DropdownItem goToMenu='facility' rightIcon={<BsChevronDoubleRight />} link='#'>
            부대시설
          </DropdownItem>
          <DropdownItem goToMenu='main' link='/tourist/history'>
            주변관광지
          </DropdownItem>
        </Menu>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'about'}
        unmountOnExit
        classNames='menu-secondary'
        timeout={500}
        onEnter={calcHeight}
      >
        <Menu>
          <DropdownItem goToMenu='main' leftIcon={<BsChevronDoubleLeft />} link='#'>
            메인메뉴
          </DropdownItem>
          <DropdownItem link='/about/introduction'>호텔소개</DropdownItem>
          <DropdownItem link='/about/location'>호텔위치</DropdownItem>
        </Menu>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'rooms'}
        unmountOnExit
        classNames='menu-secondary'
        timeout={500}
        onEnter={calcHeight}
      >
        <Menu>
          <DropdownItem goToMenu='main' mainNav leftIcon={<BsChevronDoubleLeft />} link='#'>
            메인메뉴
          </DropdownItem>
          <DropdownItem link='/rooms/main'>객실소개</DropdownItem>
          <DropdownItem category link='#'>
            스탠다드
          </DropdownItem>
          <DropdownItem link='/rooms/superior-double'>슈페리어 더블룸</DropdownItem>
          <DropdownItem link='/rooms/superior-twin'>슈페리어 트윈룸</DropdownItem>
          <DropdownItem category link='#'>
            부티크
          </DropdownItem>
          <DropdownItem link='/rooms/boutique-twin'>부티크 트윈룸</DropdownItem>
          <DropdownItem link='/rooms/boutique-family'>부티크 패밀리룸</DropdownItem>
          <DropdownItem category link='#'>
            디럭스
          </DropdownItem>
          <DropdownItem link='/rooms/deluxe-twin'>디럭스 트윈룸</DropdownItem>
          <DropdownItem link='/rooms/deluxe-suite'>디럭스 스위트룸</DropdownItem>
          <DropdownItem category link='#'>
            스위트
          </DropdownItem>
          <DropdownItem link='/rooms/suite-premier'>스위트 프리미어룸</DropdownItem>
          <DropdownItem link='/rooms/royal-suite'>로얄 스위트룸</DropdownItem>
        </Menu>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'facility'}
        unmountOnExit
        classNames='menu-secondary'
        timeout={500}
        onEnter={calcHeight}
      >
        <Menu>
          <DropdownItem goToMenu='main' leftIcon={<BsChevronDoubleLeft />} link='#'>
            메인메뉴
          </DropdownItem>
          <DropdownItem link='/facility/main'>부대시설 소개</DropdownItem>
          <DropdownItem link='#' category>
            사우나 & 피트니스
          </DropdownItem>
          <DropdownItem link='/facility/sauna'>사우나센터</DropdownItem>
          <DropdownItem link='/facility/fitness'>피트니스 센터</DropdownItem>
          <DropdownItem link='#' category>
            서비스
          </DropdownItem>
          <DropdownItem link='/facility/cafe'>호텔 카페</DropdownItem>
          <DropdownItem link='/facility/restaurant'>호텔 레스토랑</DropdownItem>
        </Menu>
      </CSSTransition>
    </StyledDropdownMenu>
  );
};

export default DropdownMenu;
