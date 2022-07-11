import React, { FC, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { RootState } from '../rootReducer';

const Home = lazy(() => import('../features/home/Home'));

const App: FC = () => {


  return (
    <Router>
      <Switch>
        <Route path="/">
          <Suspense fallback={<p>Loading...</p>}>
            <Home />
          </Suspense>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
