import Button from '@mui/material/Button';
import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Button variant="contained">Hello world</Button>
    </StyledApp>
  );
}

export default App;
