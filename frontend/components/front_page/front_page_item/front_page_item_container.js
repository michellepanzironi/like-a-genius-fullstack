import { connect } from 'react-redux';
import FrontPageItem from './front_page_item';

const msp = (state, ownProps) => {
  const songInfo = ownProps.songInfo;
  const index = ownProps.index;

  return { index, songInfo };
};


export default connect(msp)(FrontPageItem);
