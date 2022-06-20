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
  min-height: 100vh;
  height: 100%;

  color: #fff;
  max-width: 1160px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 0px;
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
      font-size: 24px;
      line-height: 1;
    }
  }

  .main_box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 80px;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    @media (max-width: 560px) {
      gap: 40px;
    }
  }
`;
