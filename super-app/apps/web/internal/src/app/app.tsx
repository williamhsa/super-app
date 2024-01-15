import Button from '@mui/material/Button';
import { ModulesHome } from '@super-app/modules/home';
import { StrictMode } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
// WillReside Hub
const StyledApp = styled.div`
  // Your style here
`;

const LoginWrapper = () => <div> ae Login Wrapper </div>
const PageErrorGlobal = () => <div> error global  </div>
const Layout = () => <div> layout </div>

function PublicRoutes() {
  return [
    {
      path: '',
      redirectTo: 'login'
    },
    {
      path: 'login',
      element: <LoginWrapper />,
      elementError: <PageErrorGlobal />
    },
    {
      path: '*',
      element: <Navigate to='/login' replace />
    }
  ]
};

function PrivateRoutes() {
  const auth = true; // get from state manager

  return [
    {
      path: '/',
      element: auth ? ( <Navigate to='/home' replace />) : (<Navigate to='/login' />)
    },
    {
      element: <Layout />,
      children: [

      ]
    }
  ]

}


export function App() {
  const router = createBrowserRouter([...PrivateRoutes()]);
  return (
    <StrictMode>
      <StyledApp>
        {/* <RouterProvider router={router} /> */}
        <Button variant="contained">Hello world</Button>
        <ModulesHome />
      </StyledApp>
    </StrictMode>

  );
}

export default App;
