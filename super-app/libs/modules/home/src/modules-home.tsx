import Button from '@mui/material/Button';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ModulesHomeProps {}

const StyledModulesHome = styled.div`
  color: pink;
`;

export function ModulesHome(props: ModulesHomeProps) {
  return (
    <StyledModulesHome>
      <h1>Welcome to ModulesHome!</h1>
      <Button variant="contained">Hello world</Button>
    </StyledModulesHome>
  );
}

export default ModulesHome;
