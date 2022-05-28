import { Fragment } from 'react';
import './App.css';
import TheHeader from './components/layout/TheHeader';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContactsView from './views/ContactsView';

function App() {
  return (
    <Fragment>
      <TheHeader />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/contacts' />
        </Route>
        <Route path='/contacts' exact>
          <ContactsView />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
