import React from 'react';
import styled, { css } from 'styled-components';

const Img = styled.img`
  cursor: pointer;
  object-fit: cover;
  width: 90px;
  height: 125px;
`;

const HighlightImg = styled(Img)`
  display: block;
  width: 150px;
  height: 225px;
`;

const Frame = styled.div`
  float: left;
  overflow: auto;
  padding: 3px;
`;

const HiliteDiv = styled.div`
  position: relative;
  height: 300px;
  width: 600px;
  border: solid 1px red;
  background: white;
  top: -295px;
  left: 295px;
  padding: 12px 0 0 5px;
  z-index: 1;
`;

const StyleDiv2 = styled(HiliteDiv)`
  width: 8px;
  left: -8px;
  top: -595px;
`;

const Info = styled.div`
  overflow: hidden;
  margin-top: -20px;
  width: 275px;
`;

const HiliteFrame = styled.div`
  display: inline-block;
  margin-right: 10px;
  float: left;
`;

const View = styled.div`
  display: inline-block;
  float: left;
  width: 296px;
`;

const Container = styled.div`
  width: 600px;
  height: 255px;
  overflow: hidden;
  transform: translateX(${props => props.mosaic === 'prev' ? '0px' : '-290px'});
  transition: transform 0.5s;
  margin-bottom: 10px;
`;

const Prev = styled.a`
  cursor: pointer;
  color: ${props => props.mosaic === 'next' ? 'black' : '#878787' };
`;

const Next = styled(Prev)`
  color: ${props => props.mosaic === 'next' ? '#878787' : 'black' };
`;

const Arrow = styled.div`
  margin-left: 70px;
`;

export {
  Img, StyleDiv2, View, Container, Prev, Next, Arrow,
  HighlightImg, Frame, HiliteDiv, HiliteFrame, Info
};