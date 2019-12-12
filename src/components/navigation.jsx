import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Navbar } from '@blueprintjs/core';
import { Global, css } from '@emotion/core';
import Routes from 'routes';
import Logo from 'components/../../public/logo.png';

const Navigation = () => {
  return (
    <>
      <Navbar className="bp3-dark" fixedToTop>
        <Navbar.Group>
          <Link to={Routes.home.path}>
            <Navbar.Heading>
              <img src={Logo} height={50} alt="Road Mapp" />
            </Navbar.Heading>
          </Link>
        </Navbar.Group>
        <Navbar.Group>
          {Object.keys(Routes)
            .filter(key => !Routes[key].hidden)
            .map(key => (
              <NavLink key={key} to={Routes[key].path}>
                {key}
              </NavLink>
            ))}
        </Navbar.Group>
      </Navbar>
      <Global
        styles={css`
          #root {
            padding-top: 50px;
          }
        `}
      />
    </>
  );
};

export default Navigation;
