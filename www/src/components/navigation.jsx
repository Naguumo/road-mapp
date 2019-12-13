import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Button, Alignment, Classes } from '@blueprintjs/core';
import { Global, css } from '@emotion/core';
import { capitalize } from 'lodash';
import Routes from 'routes';

const navStyles = css`
  #root {
    padding-top: 50px;
  }
`;

const Navigation = () => {
  return (
    <>
      <Navbar className={Classes.DARK} fixedToTop>
        <Navbar.Group align={Alignment.LEFT}>
          <Navbar.Heading>Road Mapp</Navbar.Heading>
        </Navbar.Group>
        <Navbar.Group align={Alignment.RIGHT}>
          {Object.keys(Routes)
            .filter(key => !Routes[key].hidden)
            .map(key => (
              <NavLink
                key={key}
                to={Routes[key].path}
                className={`${Classes.BUTTON} ${Classes.MINIMAL}`}
              >
                {capitalize(key)}
              </NavLink>
            ))}
          <Navbar.Divider />
          <Button className={Classes.MINIMAL} icon="user" text="Login" />
          <Button className={Classes.MINIMAL} icon="cog" text="Settings" />
        </Navbar.Group>
      </Navbar>
      <Global styles={navStyles} />
    </>
  );
};

export default Navigation;
