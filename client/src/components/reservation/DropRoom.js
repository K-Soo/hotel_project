import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Button from 'lib/styles/Button';

const ToggleContain = styled.div`
  padding-top: 30px;
  display: flex;
  flex-wrap: wrap;
  .imgItem {
    flex: 1 1 35%;
    overflow: hidden;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      :hover {
        transform: scale(1.1);
        transition: transform 0.5s;
      }
    }
  }
  .contentItem {
    padding: 20px;
    flex: 1 1;
    min-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid #000;
    ${({ theme }) => theme.Tablet`
      min-width: 100%; 
      `}
    .roomTitle {
      span {
        padding-bottom: 5px;
      }
      padding-bottom: 10px;
    }
    .contentInner {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      padding-bottom: 10px;
      .desc {
        padding: 2px 0;
      }
      @media screen and (max-width: 860px) {
        flex-direction: row;
        padding-bottom: 5px;
        .desc {
          padding: 0 10px 0 0;
          ::after {
            padding-left: 10px;
            content: '/';
            color: #666;
          }
          :last-child:after {
            content: '';
          }
          @media screen and (max-width: 514px) {
            :nth-child(2):after {
              content: '';
            }
          }
          @media screen and (max-width: 330px) {
            ::after {
              content: '';
            }
          }
        }
      }
    }
    .price {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      font-size: 22px;
      line-height: 39px;
      white-space: nowrap;
      span {
        font-size: 14px;
        color: #666;
        font-weight: 400;
      }
      ${({ theme }) => theme.Mobile`
        border-top: 1px solid #666;
      `}
    }
  }
`;
const ReserveButton = styled(Button)`
  a {
    padding: 10px 40px;
  }
  ${({ theme }) => theme.Mobile`
    width: 100%;
  `}
`;

const Toggle = styled.div`
  &.fade-enter {
    height: 0;
    opacity: 0;
  }
  &.fade-enter-active {
    height: ${({ menuHeight }) => menuHeight};
    opacity: 1;
  }
  &.fade-exit {
    height: ${({ menuHeight }) => menuHeight};
    opacity: 1;
    transition: all 0.3s linear;
  }
  &.fade-exit-active {
    height: 0;
    opacity: 0;
  }
`;

const DropButton = styled.div`
  margin: 30px auto;
  width: 1024px;
  border: 1px solid #666;
  h2 {
    cursor: pointer;
    display: inline-block;
    padding-right: 10px;
    :hover {
      color: #000;
    }
  }
  h4 {
    position: absolute;
    display: inline-block;
    right: 10px;
    color: #3f6299;
    font-size: 16px;
    line-height: 35px;
    cursor: pointer;
    :hover {
      color: #0e4377;
    }
  }
  #Inner {
    position: relative;
    color: #333;
    padding: 10px;
    height: auto;
    border: solid #ccc;
    border-width: 0 0 1px 0;
  }
  .subName {
    color: #666;
    font-weight: 500;
    font-size: 16px;
  }
  ${({ theme }) => theme.Laptop`
      width: 95%;
  `}
  ${({ theme }) => theme.Mobile`
      h2{
        font-size: 16px;
      }
      h4{
        font-size: 14px;
      }
  `}
`;

const DropRoom = ({ nameHandler, Category, resolved, loading, error, handleClick, history }) => {
  const [menuHeight, setMenuHeight] = useState(null);
  const nav = useRef();

  const calcHeight = () => {
    const height = nav.current ? `${nav.current.offsetHeight}px` : '0px';
    setMenuHeight(height);
  };

  if (loading) {
    return <DropButton>Loading...</DropButton>;
  }
  if (error) {
    history.push('/');
  }
  if (!resolved) {
    return null;
  }

  return (
    <>
      <DropButton set={Category}>
        {resolved.map(
          ({ id, roomType, name, people, reName, roomSize, roomImage, price, link }) => (
            <div id='Inner' className={reName} onClick={nameHandler} key={id}>
              <h2 className={reName}>{name}</h2>
              <span className='subName'>({roomType})</span>
              <h4 className={reName} onClick={nameHandler}>
                자세히보기
              </h4>
              <CSSTransition
                in={Category[reName]}
                classNames='fade'
                timeout={300}
                unmountOnExit
                onEnter={calcHeight}
              >
                <Toggle menuHeight={menuHeight}>
                  <ToggleContain ref={nav}>
                    <article className='imgItem'>
                      <Link to={`/rooms/${link}`}>
                        <img src={require(`lib/images/${roomImage}`)} alt={name} />
                      </Link>
                    </article>

                    <article className='contentItem'>
                      <div className='roomTitle'>
                        <span>{roomType}</span>
                        <h3>{name}</h3>
                      </div>

                      <div className='contentInner'>
                        <div className='desc'>
                          <strong>전망 : </strong>
                          <span>시티</span>
                        </div>
                        <div className='desc'>
                          <strong>투숙인원 : </strong>
                          <span>{people}</span>
                        </div>

                        <div className='desc'>
                          <strong>객실면적 : </strong>
                          <span>{roomSize}</span>
                        </div>
                      </div>

                      <div className='price'>
                        <div>
                          <span>KRW</span>
                          <strong>&nbsp;{price}&nbsp;</strong>
                          <span>(VAT 포함)</span>
                        </div>
                        <ReserveButton>
                          <Link onClick={() => handleClick(id)} to='/reservation/guest-info'>
                            예약하기
                          </Link>
                        </ReserveButton>
                      </div>
                    </article>
                  </ToggleContain>
                </Toggle>
              </CSSTransition>
            </div>
          )
        )}
      </DropButton>
    </>
  );
};

export default DropRoom;
