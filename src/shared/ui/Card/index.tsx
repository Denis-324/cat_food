/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-nested-ternary */
import { Image } from 'antd';
import React, { useState } from 'react';
import { DataType, Helpers } from 'shared';
import styled from 'styled-components';
import cat from './cat.png';

const { getColor, getOpacity, onHoverGrey, onHoverRed } = Helpers;

type CardType = {
  el: DataType;
};

export const Card: React.FC<CardType> = (props) => {
  const { el } = props;
  const [toggle, setToggle] = useState(false);
  const [hover, setHover] = useState(0);
  const onHoverEnter = () => {
    setHover(hover + 1);
  };
  const onHoverLive = () => {
    setHover(0);
  };
  const handlerToggle = () => {
    setHover(0);
    setToggle(!toggle);
  };

  return (
    <Wrap
      opacity={getOpacity(el.disabled)}
      hoverRed={onHoverRed(toggle, hover)}
      hoverGrey={onHoverGrey(toggle, hover)}
      color={getColor(toggle, el.disabled)}
    >
      <button
        disabled={el.disabled}
        onMouseLeave={onHoverLive}
        onMouseEnter={onHoverEnter}
        onClick={handlerToggle}
        type="button"
      >
        <div className="card_opacity">
          <div className="card_item">
            <div className="card_sabtitle">{el.subTitle.one}</div>
            <div className="card_sabtitle_red">{el.subTitle.two}</div>

            <div className="card_title">{el.title}</div>
            <div className="card_ingredient">{el.ingredient}</div>
            <div className="card_portion_count">
              {el.countPortion} <span className="card_portion">порций</span>{' '}
            </div>

            <div className="card_present_count">
              {el.countPresent}
              {el.countPresent === null ? (
                <span className="card_present"> мышь в подарок</span>
              ) : el.countPresent === '2' ? (
                <span className="card_present"> мыши в подарок</span>
              ) : el.countPresent === '5' ? (
                <span className="card_present"> мышей в подарок</span>
              ) : null}
            </div>

            {el.result && <div className="card_present">{el.result}</div>}
            <div className="card_img">
              <Image preview={false} src={cat} />
            </div>
            <div className="card_mass_box">
              <span className="card_mass_count">{el.mass}</span>
              <span className="card_mass">кг</span>
            </div>
          </div>
        </div>
      </button>

      {!toggle && !el.disabled && (
        <div className="card_footer">
          {el.footerCadr.one}{' '}
          <button onClick={handlerToggle} type="button" className="card_button">
            купи.
          </button>
        </div>
      )}
      {toggle && !el.disabled && <div className="card_footer">{el.footerCadr.two}</div>}
      {el.disabled && <div className="card_footer_disabled">{el.footerCadr.three}</div>}
    </Wrap>
  );
};

const Wrap = styled((props) => <div {...props} />)`
  justify-self: center;
  width: 320px;
  height: 509px;
  @media (max-width: 400px) {
    width: 280px;
    height: 480px;
  }
  button {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
  }

  .card_item {
    position: relative;
    padding: 21px 0 0 48px;
    width: 320px;
    height: 480px;
    text-align: left;
    cursor: pointer;
    border-radius: 0 12px 12px 12px;
    border: solid ${(props) => props.color};
    opacity: ${(props) => props.opacity};
    @media (max-width: 400px) {
      width: 280px;
      height: 450px;
      padding: 21px 0 0 28px;
    }
  }

  .card_opacity {
    border-radius: 0 12px 12px 12px;
    background: var(--color-white);
    background: linear-gradient(135deg, transparent 34px, var(--color-white) 0);
  }

  .card_sabtitle {
    color: var(--color-grey-fonts);
    font: var(--paragraph-16_19-regular);
    margin-bottom: 10px;
  }
  .card_item:hover > .card_sabtitle {
    display: ${(props) => props.hoverGrey};
  }

  .card_sabtitle_red {
    display: none;
    color: var(--color-red);
    font: var(--paragraph-16_19-regular);
    margin-bottom: 10px;
  }
  .card_item:hover > .card_sabtitle_red {
    display: ${(props) => props.hoverRed};
  }
  .card_title {
    color: var(--color-black);
    font: var(--paragraph-48_56-bold);
  }
  .card_ingredient {
    color: var(--color-black);
    font: var(--paragraph-24_28-bold);
  }
  .card_portion_count {
    color: var(--color-grey-fonts);
    font: var(--paragraph-14_16-bold);
    margin-top: 15px;
  }
  .card_portion {
    color: var(--color-grey-fonts);
    font: var(--paragraph-14_16-regular);
  }
  .card_present_count {
    color: var(--color-grey-fonts);
    font: var(--paragraph-14_16-bold);
  }

  .card_present {
    color: var(--color-grey-fonts);
    font: var(--paragraph-14_16-regular);
  }
  .card_mass_count {
    font: var(--paragraph-42_22-regular);
    margin-top: 11px;
  }
  .card_mass {
    font: var(--paragraph-21_22-regular);
  }
  .card_mass_box {
    position: absolute;
    bottom: 16px;
    right: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: ${(props) => props.color};
  }
  .card_img {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .card_footer {
    margin-top: 14px;
    font: var(--paragraph-13_15-regular);
  }
  .card_footer_disabled {
    margin-top: 14px;
    color: var(--color-yellow);
  }
  .card_button {
    cursor: pointer;
    display: inline-block;
    background: none;
    margin: 0px;
    padding: 0px;
    color: var(--color-blue);
    border-bottom: 1px dashed var(--color-blue);
  }
`;
