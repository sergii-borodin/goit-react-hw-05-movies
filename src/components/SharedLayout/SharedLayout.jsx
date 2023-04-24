import { Suspense } from 'react';
import {
  Container,
  Header,
  PageLink,
  NavigationLink,
} from './SharedLayout.styled';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <PageLink to="/">themoviedb</PageLink>
        <nav>
          <ul>
            <li>
              <NavigationLink to="/">Home</NavigationLink>
            </li>
            <li>
              <NavigationLink to="/movies">Movies</NavigationLink>
            </li>
          </ul>
        </nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
