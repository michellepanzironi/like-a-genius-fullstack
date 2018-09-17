import React from 'React';
import { Link } from 'react-router-dom';

const FrontPageItem = ownProps => {
  let index = ownProps.index;
  let songId = ownProps.song.id;
  let title = ownProps.song.title;
  let artist = ownProps.song.artist;

  return (
    <div classname="front-page-list-item">
      <Link to={`songs/${songId}`}>
        <button>
          <span classname="front-page-list-index">{index}</span>
          <div>
            <span classname="front-page-list-title">{title}</span>
            <br />
            <span classname="front-page-list-artist">{artist}</span>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default FrontPageItem;
