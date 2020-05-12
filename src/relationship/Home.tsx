import React from 'react';

import styled from 'styled-components';

const HomeTitle = styled.div`
  font-size: 100px;
  font-weight: 700;
  text-align: center;
  height: 600px;
  line-height: 600px;
`;
const BuleSpan = styled.span`
  color: #40a9ff;
`;
export default () => {
  return (
    <>
      <HomeTitle>
        S<BuleSpan>A</BuleSpan>FETY LEG<BuleSpan>I</BuleSpan>SLATION
      </HomeTitle>
    </>
  );
};
