import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import SessionModal from './session_modal/session_modal_container';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import FrontPageContainer from './front_page/front_page_container';
import SongIndexContainer from './songs/song_index/song_index_container';
import SongShowContainer from './songs/song_show/song_show_container';
import EditSongFormContainer from './songs/song_form/edit_song_form_container';
import CreateSongFormContainer from './songs/song_form/create_song_form_container';
import ArtistIndexContainer from './artists/artist_index/artist_index_container';
import ArtistShowContainer from './artists/artist_show/artist_show_container';

const App = () => (
  <div>
    <header>
      <SessionModal />
      <Navbar />
    </header>
    <main className="main">
      <Switch>
        <Route exact path="/" component={FrontPageContainer} />
        <Route exact path="/artists" component={ArtistIndexContainer} />
        <Route exact path="/artists/:artistId" component={ArtistShowContainer} />
        <Route exact path="/songs" component={SongIndexContainer} />
        <Route exact path="/songs/new" component={CreateSongFormContainer} />
        <Route exact path="/songs/:songId" component={SongShowContainer} />
        <Route exact path="/songs/:songId/edit" component={EditSongFormContainer} />
      </Switch>
    </main>
    <footer>
      <Footer className="footer" />
    </footer>
  </div>
);

export default App;
