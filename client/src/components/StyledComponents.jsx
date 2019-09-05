import React from 'react';
import styled, { css } from 'styled-components';

const Img = styled.img`
  cursor: pointer;
  object-fit: cover;
  width: 90px;
  height: 130px;
  outline: ${props => Number(props.id) === Number(props.highlighted) ? '3px solid #fd0' : 'none'};
`;

Img.displayName = 'Img';

const HighlightImg = styled(Img)`
  display: block;
  width: 150px;
  height: 225px;
  border: none;
`;

const Frame = styled.div`
  float: left;
  overflow: auto;
  padding: 3px;
`;

const HighlightDiv = styled.div`
  position: relative;
  height: 300px;
  width: 500px;
  background: white;
  top: -315px;
  left: 295px;
  padding: 12px 0 0 5px;
  z-index: 1;
`;

const Spacer = styled(HighlightDiv)`
  width: 200px;
  left: -210px;
  top: -625px;
`;

const Info = styled.div`
  overflow: hidden;
  margin-top: -20px;
  width: 225px;
`;

const HighlightFrame = styled.div`
  display: inline-block;
  margin-right: 10px;
  float: left;
`;

const View = styled.div`
  display: inline-block;
  float: left;
  width: 296px;
`;

const ViewContainer = styled.div`
  width: 600px;
  height: 275px;
  overflow: hidden;
  transform: translateX(${props => props.mosaic === 'prev' ? '0px' : '-290px'});
  transition: transform 0.5s;
  margin-bottom: 10px;
`;

const Container = styled.div`
  font-family: Verdana, sans-serif;
`;

const Prev = styled.a`
  cursor: pointer;
  font-size: 13px;
  color: ${props => props.mosaic === 'next' ? '#136cb2' : '#ccc' };
`;

Prev.displayName = 'Prev';

const Next = styled(Prev)`
  color: ${props => props.mosaic === 'next' ? '#ccc' : '#136cb2' };
`;

Next.displayName = 'Next';

const Arrow = styled.div`
  margin-left: 80px;
`;

const MPAA = styled.span`
  display: inline-block;
  position: relative;
  top: 4px;
  background-image: url('https://hrr40-fec2-jeremypurser.s3.us-east-2.amazonaws.com/titlePageSprite.png');
  background-position: ${props => props.theme.position};
  height: 16px;
  width: ${props => props.theme.width};
  display: inline-block;
`;

const Genre = styled.div`
  font-size: 11px;
  color: #aaa;
  margin-top: -8px;
`;

const H2 = styled.h2`
  font: 24px Helvetica, Arial, sans-serif;
  font-weight: normal;
  color: #424242;
`;

const H3 = styled.h3`
  line-height: 1.1;
`;

const Title = styled.a`
  color: #136cb2;
  font-size: 13px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  &:visited {
    color: #70579d;
  }
`;

const Year = styled.span`
  font-size: 13px;
  color: #999;
  font-weight: normal;
`;

const Summary = styled.p`
  color: #333;
  line-height: 1.4;
  font-size: 11px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  max-height: 11;
`;

const Btn1 = styled.button`
  display: block;
  font-family: Verdana, Arial, sans-serif;
  text-align: center;
  font-size: 13px;
  width: 98%;
  margin: 2px auto 0;
  background-image: linear-gradient(#fefcea, #f3ce00);
  &:focus {
    outline: none;
    text-decoration: none;
  }
  &:hover {
    outline: none;
    text-decoration: none;
  }
`;

const Btn2 = styled(Btn1)`
  background-image: linear-gradient(#faf8f1, #ece2c6);
  &:hover {
    background-color: #ece2c6;
    border: 1px solid #e6b800;
  }
`;

export {
  Img, Container, Spacer, View, ViewContainer, Prev, Next, Arrow,
  HighlightImg, Frame, HighlightDiv, HighlightFrame, Info, MPAA,
  Genre, H2, Title, Year, Summary, Btn1, Btn2, H3
};