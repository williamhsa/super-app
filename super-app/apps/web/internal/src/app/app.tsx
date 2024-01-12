import Button from '@mui/material/Button';
import { ModulesHome } from '@super-app/modules/home';
import styled from 'styled-components';
// WillReside Hub
const StyledApp = styled.div`
  // Your style here
`;


export function App() {
  return (
    <StyledApp>
      <Button variant="contained">Hello world</Button>
      <ModulesHome />

    </StyledApp>
  );
}

export default App;
