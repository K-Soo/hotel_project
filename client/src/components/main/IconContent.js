import React from 'react';
import styled from 'styled-components';
import { MdRoomService, MdFitnessCenter, MdPersonOutline, MdRestaurant } from 'react-icons/md';
import { AiOutlineKey } from 'react-icons/ai';
import { FaFax, FaBus } from 'react-icons/fa';

const ContentBlock = styled.div`
  margin: 50px auto;
  padding: 0 2rem;
  border: 1px solid red;
  text-align: center;
`;
const Containers = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
  .item {
    display: flex;
    border: 1px solid red;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    height: 70px;
    width: 70px;
  }
`;

const IconContent = () => {
  return (
    <>
      <ContentBlock>
        <h2> 주요 편의 시설</h2>
        <Containers>
          <div className='item'>
            digital key
            <AiOutlineKey size={30} />
          </div>
          <div className='item'>online check-in</div>
          <div className='item'>
            Fitness
            <MdFitnessCenter size={30} />
          </div>
          <div className='item'>
            Room service
            <MdRoomService size={30} />
          </div>
          <div className='item'>
            Pickup
            <FaBus size={30} />
          </div>
          <div className='item'>
            concierge
            <MdPersonOutline size={30} />
          </div>
          <div className='item'>
            Restaurant
            <MdRestaurant size={30} />
          </div>
          <div className='item'>
            Business
            <FaFax size={30} />
          </div>
        </Containers>
      </ContentBlock>
    </>
  );
};

export default IconContent;
