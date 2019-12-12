import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Routes from 'routes';

const PageDisplay = () => {
  return (
    <Switch>
      {Object.keys(Routes).map(key =>
        !Routes[key].authenticated ? (
          <Route
            key={key}
            path={Routes[key].path}
            render={props =>
              React.createElement(Routes[key].component, {
                ...props,
                routes: Routes[key].routes
              })
            }
          />
        ) : (
          <Redirect to="/" />
        )
      )}
    </Switch>
  );
};

export default PageDisplay;
