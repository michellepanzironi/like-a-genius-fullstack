import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SessionModal from './session_modal/session_modal_container';
import Navbar from './navbar/navbar';

const App = () => (
  <div>
    <header>
      <SessionModal />
      <h1>Like, a genius or something</h1>
      <Navbar />
    </header>
  </div>
);

export default App;
