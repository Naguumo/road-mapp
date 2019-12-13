import React from 'react';
import { Router } from 'react-router-dom';
import { Global, css } from '@emotion/core';
import { Colors } from '@blueprintjs/core';
import 'normalize.css/normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import history from 'utils/history';
import Navigation from 'components/navigation';
import PageDisplay from 'components/pageDisplay';

const globalStyle = css`
  body {
    background-color: ${Colors.GRAY5};
  }
`;

const App = () => {
  return (
    <>
      <Router history={history}>
        <Navigation />
        <PageDisplay />
      </Router>
      <Global styles={globalStyle} />
    </>
  );
};

export default App;
