/** @jsx jsx */

import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { css, jsx } from '@emotion/core';
import { capitalize } from 'lodash';
import { Toolbar } from 'primereact/toolbar';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Growl } from 'primereact/growl';
import Routes from 'routes';

const Navigation = () => {
  const [sidebar, setSidebar] = useState(false);
  const growlRef = useRef(null);
  return (
    <>
      <Growl ref={growlRef} />
      <Toolbar
        css={css`
          border-radius: 0 !important;
          button {
            margin-left: 10px;
          }
        `}
      >
        <div className="p-toolbar-group-left">
          <img
            src="/logo.svg"
            alt="Road Mapp"
            css={css`
              height: 31px;
            `}
          />
        </div>
        <div className="p-toolbar-group-right">
          <Button
            icon="pi pi-user"
            onClick={() => {
              growlRef.current.show({
                severity: 'warn',
                summary: 'Unavailable',
                detail: 'This functionality is currently unavailable'
              });
            }}
          />
          <Button
            icon="pi pi-cog"
            onClick={() => {
              growlRef.current.show({
                severity: 'warn',
                summary: 'Unavailable',
                detail: 'This functionality is currently unavailable'
              });
            }}
          />
          <Button icon="pi pi-bars" onClick={() => setSidebar(true)} />
        </div>
      </Toolbar>
      <Sidebar
        visible={sidebar}
        position="right"
        showCloseIcon={false}
        onHide={() => setSidebar(false)}
      >
        <div css={css``}>
          {Object.keys(Routes)
            .filter(key => !Routes[key].hidden)
            .map(key => (
              <NavLink key={key} to={Routes[key].path}>
                {capitalize(key)}
              </NavLink>
            ))}
        </div>
        <div
          css={css`
            background-color: black;
            height: 250px;
          `}
        />
        <p>
          This is a privately hosted project. Any ads help keep us running and
          Free!
        </p>
      </Sidebar>
    </>
  );
};

export default Navigation;
