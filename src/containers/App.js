import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import {
  doSearch,
  getLastReactVideos,
  getLastJsVideos
} from '../actions/index';

import VideosSection from '../components/VideosSection';

class App extends Component {
  componentDidMount() {
    this.props.getReactVideos();
    this.props.getJsVideos();
  }
  handleClickVideo = videoId => {
    console.log(videoId);
  };
  render() {
    let results;
    if (this.props.searchTerm.length > 0) {
      results = (
        <VideosSection
          {...this.props.searchResults}
          title={this.props.searchTerm}
          handleClickVideo={this.handleClickVideo}
        />
      );
    } else {
      results = '';
    }
    return (
      <div>
        <SearchBar
          value={this.props.searchTerm}
          handleSearch={this.props.handleSearch}
        />
        {results}
        <VideosSection
          {...this.props.reactVideos}
          title="ReactJs"
          handleClickVideo={this.handleClickVideo}
        />
        <VideosSection
          {...this.props.jsVideos}
          title="JavaScript"
          handleClickVideo={this.handleClickVideo}
        />
      </div>
    );
  }
}

App.defaultProps = {
  searchTerm: '',
  reactVideos: {},
  jsVideos: {},
  searchResults: {},
  handleClickVideo: () => {}
};

App.propTypes = {
  searchTerm: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
  handleClickVideo: PropTypes.func,
  getReactVideos: PropTypes.func.isRequired,
  getJsVideos: PropTypes.func.isRequired,
  reactVideos: PropTypes.object,
  jsVideos: PropTypes.object,
  searchResults: PropTypes.object
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  searchResults: state.searchResults,
  reactVideos: state.reactVideos,
  jsVideos: state.jsVideos
});

const mapDispatchToProps = dispatch => ({
  handleSearch(event) {
    dispatch(doSearch(event.target.value));
  },
  getReactVideos() {
    dispatch(getLastReactVideos());
  },
  getJsVideos() {
    dispatch(getLastJsVideos());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
