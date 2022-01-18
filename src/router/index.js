import { Suspense } from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { ErrorModal } from '../components/ErrorModal/ErrorModal';
import { Layout } from '../components/Layout';
import { publicRoutes } from './routes';

export const MainRouter = () => {
  return (
    <Router>
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
            <Redirect to="/home" />
          </Switch>
        </Layout>
        <ErrorModal />
      </Suspense>
    </Router>
  );
};
