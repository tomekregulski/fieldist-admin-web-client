import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

import { MainView, Login } from './pages';
import NavbarSwitch from './components/Navbar/NavbarSwitch';

import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <>
      <DataProvider>
        <NavbarSwitch />
        <Switch>
          <ProtectedRoute exact path={'/'} component={MainView} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </DataProvider>
    </>
  );
}

export default App;
