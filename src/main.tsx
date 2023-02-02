import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App'
import './index.css'
import PomodoraPage from './pages/PomodoraPage';
import SettingsPage from './pages/SettingsPage';
import StatisticsPage from './pages/StatisticsPage';
import TimerPage from './pages/TimerPage';
import UntilTimePage from './pages/UntilTimePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: '/', element: <PomodoraPage />},
      {path: '/timer', element: <TimerPage />},
      {path: '/untiltime', element: <UntilTimePage />},
      {path: '/statistics', element: <StatisticsPage />},
      {path: '/settings', element: <SettingsPage /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
