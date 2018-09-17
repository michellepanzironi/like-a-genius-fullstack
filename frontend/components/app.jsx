import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SessionModal from './session_modal/session_modal_container';
import Navbar from './navbar/navbar';
import Footer from './footer/footer'
import FrontPageContainer from './front_page/front_page_container';
import SongShowContainer from './songs/song_show/song_show_container';
import EditSongFormContainer from './songs/song_form/edit_song_form_container';
import CreateSongFormContainer from './songs/song_form/create_song_form_container';

const App = () => (
  <div>
    <header>
      <SessionModal />
      <Navbar />
    </header>
    <main className="main">
      <Switch>
        <Route exact path="/" component={FrontPageContainer} />
        <Route exact path="/songs/:songId/edit" component={EditSongFormContainer} />
        <Route exact path="/songs/new" component={CreateSongFormContainer} />
      </Switch>
    </main>
    <footer>
      <Footer className="footer" />
    </footer>
  </div>
);

export default App;
