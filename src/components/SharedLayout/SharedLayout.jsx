import React from 'react';
import {
  Container,
  Header,
  PageLink,
  NavigationLink,
} from './SharedLayout.styled';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';

const SharedLayout = ({ children }) => {
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
      <Outlet />
    </Container>
  );
};

SharedLayout.propTypes = {};

export default SharedLayout;
