/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/core';

const HomePage = () => {
  return (
    <div
      css={css`
        margin 15px;
        display: grid;
        grid-template-columns: 1fr 4fr;
        grid-template-rows: auto;
        grid-gap: 15px;
        grid-template-areas: 'header header' 'legend main';
        place-items: center;
      `}
    >
      <div
        css={css`
          grid-area: header;
          display: flex;
          flex-direction: row;
          align-items: center;
        `}
      >
        <img
          src="/logo.svg"
          alt="Road Mapp"
          css={css`
            height: 15em;
          `}
        />
        <div>
          <h1>Road Mapp</h1>
          <p>A place to make, store, and share you plans for the future</p>
        </div>
      </div>
      <div
        css={css`
          grid-area: legend;
        `}
      >
        Legend
      </div>
      <div
        css={css`
          grid-area: main;
        `}
      >
        Main
      </div>
    </div>
  );
};

export default HomePage;
