import React from 'react';
import { Router } from 'react-router-dom';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Global, css } from '@emotion/core';
import 'normalize.css/normalize.css';
import 'primereact/resources/themes/nova-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import history from 'utils/history';
import Navigation from 'components/navigation';
import PageDisplay from 'components/pageDisplay';

const GET_PASSWORD_ROADMAP = gql`
  query getPasswordRoadmap($slug: String!, $password: String!) {
    passwordRoadmap(slug: $slug, password: $password) {
      id
      slug
    }
  }
`;

const globalStyles = css`
  @font-face {
    font-family: 'BungeeInline';
    src: url('fonts/BungeeInline.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    src: url('fonts/Roboto.ttf') format('truetype');
  }

  body {
    background-color: #f5f7f8;
    font-family: 'Roboto', sans-serif;
  }

  p,
  a,
  span {
    font-family: 'Roboto', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'BungeeInline', cursive;
  }
`;

const App = () => {
  const { data } = useQuery(GET_PASSWORD_ROADMAP, {
    variables: { slug: 'slug', password: 'something' }
  });

  return (
    <>
      <Router history={history}>
        <Navigation />
        <PageDisplay />
      </Router>
      <Global styles={globalStyles} />
    </>
  );
};

export default App;
