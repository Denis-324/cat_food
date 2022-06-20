/* eslint-disable no-unused-vars */
import React from 'react';
import { Card, data } from 'shared';
import styled from 'styled-components';
import Pattern from './pattern.png';

export const MainList = () => (
  <Wrap>
    <div className="pattern_bg">
      <WrapBox>
        <h1 className="main_title">Ты сегодня покормил кота?</h1>
        <div className="main_box">
          {data.map((el) => (
            <Card key={el.id} el={el} />
          ))}
        </div>
      </WrapBox>
    </div>
  </Wrap>
);

const Wrap = styled.section`
  .pattern_bg {
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background: url(${Pattern}) center / cover no-repeat;
  }
`;

const WrapBox = styled.div`
  height: 100vh;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--color-blue);
    border-radius: 4px;
  }

  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 25px;
  .main_title {
    font: var(--h1-36-42-thin);
    color: var(--color-white);
    @media (max-width: 560px) {
      font-size: 20px;
      line-height: 1;
      margin-top: 200px;
    }
  }
  @media (max-width: 560px) {
    gap: 7px;
    padding-bottom: 40px;
  }

  .main_box {
    max-width: 1140px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 80px;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    @media (max-width: 1160px) {
      grid-gap: 30px;
    }
    @media (max-width: 990px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 560px) {
      grid-template-columns: 1fr;
    }
  }
`;
