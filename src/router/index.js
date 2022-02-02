import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { ErrorModal } from '../components/ErrorModal/ErrorModal';
import { Layout } from '../components/Layout';
import { publicRoutes } from './routes';

export const MainRouter = () => {
  return (
    <Router basename="/soccerstat">
      <Suspense fallback={<div>Зазрузка...</div>}>
        <Layout>
          <ErrorBoundary
            fallback={
              <Typography variant="h3" component="h2" color="white" align="center">
                Что-то пошло не так...
              </Typography>
            }
          >
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
          </ErrorBoundary>
        </Layout>
        <ErrorModal />
      </Suspense>
    </Router>
  );
};
