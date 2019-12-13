/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';
import { Card, Classes, Elevation } from '@blueprintjs/core';

const HomePage = () => {
  console.log(Classes);
  return (
    <div
      css={css`
        margin 10px;
        display: grid;
        grid-template-columns: 5fr 1fr;
        grid-template-rows: auto;
        grid-gap: 20px;
        grid-template-areas: 'main sidebar';
        place-items: stretch;
      `}
    >
      <Card
        interactive={false}
        elevation={Elevation.TWO}
        className={Classes.DARK}
        css={css`
          grid-area: main;
        `}
      >
        Main
      </Card>
      <Card
        interactive={false}
        elevation={Elevation.TWO}
        className={Classes.DARK}
        css={css`
          grid-area: sidebar;
        `}
      >
        This is a privately hosted project. Any ads help keep us running and
        Free!
      </Card>
    </div>
  );
};

export default HomePage;
