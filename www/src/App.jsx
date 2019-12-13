import React, { useState, useEffect } from 'react';
import { Router } from 'react-router-dom';
import 'normalize.css/normalize.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import history from 'utils/history';
import Navigation from 'components/navigation';
import PageDisplay from 'components/pageDisplay';

function App() {
  const [out, setOut] = useState(null);
  useEffect(() => {
    fetch('/graphql').then(result => result.json()).then(result => setOut(result));
  }, []);

  console.log(out);

  return (
    <Router history={history}>
      <Navigation />
      <PageDisplay />
    </Router>
  );
}

export default App;
