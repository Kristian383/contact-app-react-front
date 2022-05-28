import { Fragment } from 'react';
import './App.css';
import TheHeader from './components/layout/TheHeader';
import { Route, Switch, Redirect } from 'react-router-dom';
import ContactsView from './views/ContactsView';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faEnvelope, faEdit, faPhone, faTrash } from '@fortawesome/free-solid-svg-icons'
import AddContact from './components/AddContact';
library.add(faUser, faEnvelope, faEdit, faPhone, faTrash)


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
        <Route path='/add' exact>
          <AddContact />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
