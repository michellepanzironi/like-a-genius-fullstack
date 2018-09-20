import { connect } from 'react-redux';
import ArtistShow from './artist_show';
import { fetchArtist } from '../../../actions/artist_actions';


const msp = (state, ownProps) => {
  const artist = state.entities.artists[ownProps.match.params.artistId] || { };
  const songs = artist.song_ids ? artist.song_ids.map(songId => {
    return state.entities.songs[songId];
  }) : [];
  return ({
    artist,
    songs
  });
};

const mdp = dispatch => {
  return ({
    fetchArtist: artistId => dispatch(fetchArtist(artistId))
  });
};

export default connect(msp, mdp)(ArtistShow);
