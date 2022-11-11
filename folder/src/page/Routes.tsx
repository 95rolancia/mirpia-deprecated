import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import MainPage from './MainPage';
import StatsPage from './StatsPage';

export default function Routes(): JSX.Element {
  return (
    <ReactRouterRoutes>
      <Route path="/main" element={<MainPage />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route path="*" element={<Navigate replace to="/main" />} />
    </ReactRouterRoutes>
  );
}
