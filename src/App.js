import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard, Login, InvoiceScan, IntellyDataUpload } from './pages';
import NavbarSwitch from './components/Navbar/NavbarSwitch';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <>
      <NavbarSwitch />
      <Switch>
        <ProtectedRoute exact path={'/'} component={Dashboard} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </>
  );
}

export default App;
