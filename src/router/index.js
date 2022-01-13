import { createBrowserHistory } from 'history';
import { Suspense } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { publicRoutes } from './routes';

export const history = createBrowserHistory();

export const MainRouter = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Зазрузка...</div>}>
        <Switch>
          {publicRoutes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              component={route.component}
              key={route.path}
            />
          ))}
        </Switch>
        {/* <ErrorModal /> */}
      </Suspense>
    </Router>
  );
};
