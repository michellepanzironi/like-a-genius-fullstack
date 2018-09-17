import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SessionModal from './session_modal/session_modal_container';
import Navbar from './navbar/navbar';
import Footer from './footer/footer'
import FrontPageContainer from './front_page/front_page_container';

const App = () => (
  <div>
    <header>
      <SessionModal />
      <Navbar />
    </header>
    <main className="main">
      <Switch>
        <Route exact path="/" component={FrontPageContainer} />
      </Switch>
    </main>
    <footer>
      <Footer className="footer" />
    </footer>
  </div>
);

export default App;
