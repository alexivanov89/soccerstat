import { createBrowserHistory } from 'history';
import { Suspense } from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ErrorModal } from '../components/ErrorModal/ErrorModal';
import { Layout } from '../components/Layout';
import { publicRoutes } from './routes';

export const history = createBrowserHistory();

export const MainRouter = () => {
  return (
    <Router history={history}>
      <Suspense fallback={<div>Зазрузка...</div>}>
        <Layout>
          <Switch>
            {publicRoutes.map((route) => (
              <Route
                path={route.path}
                exact={route.exact}
                component={route.component}
                key={route.path}
              />
            ))}
            <Redirect to="/" />
          </Switch>
        </Layout>
        <ErrorModal />
      </Suspense>
    </Router>
  );
};
