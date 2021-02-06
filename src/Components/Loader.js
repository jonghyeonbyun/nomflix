import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-size: 23px;
`;

const Loader = () => (
  <Container>
    <span role="img" aria-label="Loading">
      🐱‍🏍
    </span>
  </Container>
);

export default Loader;
