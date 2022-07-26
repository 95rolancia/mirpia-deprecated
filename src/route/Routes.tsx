import { DeliveryPage } from 'pages/DeliveryPage';
import { MealPage } from 'pages/MealPage';
import { SchedulePage } from 'pages/SchedulePage';
import { TransportPage } from 'pages/TransportPage';
import { StartPage } from 'pages/StartPage';
import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/start" element={<StartPage />} />
      <Route path="/schedule" element={<SchedulePage />} />
      <Route path="/transport" element={<TransportPage />} />
      <Route path="/meal" element={<MealPage />} />
      <Route path="/delivery" element={<DeliveryPage />} />
      <Route path="*" element={<Navigate replace to="/start" />} />
    </ReactRouterRoutes>
  );
};
