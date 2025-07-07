import React from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';  // import BrowserRouter here
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import AddCreator from './pages/AddCreator';
import NotFound from './pages/NotFound';
import './App.css';

function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <ShowCreators /> },
    { path: '/creators/:id', element: <ViewCreator /> },
    { path: '/edit/:id', element: <EditCreator /> },
    { path: '/add', element: <AddCreator /> },
    { path: '*', element: <NotFound /> }
  ]);
  return routes;
}

function App() {
  return (
    <BrowserRouter basename="/WEB103---PreWork">
      <div className="App">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
