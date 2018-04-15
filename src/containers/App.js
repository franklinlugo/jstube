import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import VideosSection from '../components/VideosSection';
import VideoModal from '../components/VideoModal';
import {
  doSearch,
  getLastReactVideos,
  getLastJsVideos,
  handleModal
} from '../actions/index';

class App extends Component {
  componentDidMount() {
    this.props.getReactVideos();
    this.props.getJsVideos();
  }
  handleClickVideo = videoId => {
    this.props.openModal(true, videoId);
  };
  closeModal = () => {
    this.props.openModal(false);
  };
  render() {
    let results;
    let modal;
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
    if (this.props.modal.visible) {
      modal = (
        <VideoModal
          video={this.props.modal.video}
          closeModal={this.closeModal}
        />
      );
    }
    return (
      <div>
        <SearchBar
          value={this.props.searchTerm}
          handleSearch={this.props.handleSearch}
        />
        {results}
        {modal}
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
  openModal: () => {},
  modal: {}
};

App.propTypes = {
  searchTerm: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
  getReactVideos: PropTypes.func.isRequired,
  getJsVideos: PropTypes.func.isRequired,
  reactVideos: PropTypes.object,
  jsVideos: PropTypes.object,
  searchResults: PropTypes.object,
  modal: PropTypes.object,
  openModal: PropTypes.func
};

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
  searchResults: state.searchResults,
  reactVideos: state.reactVideos,
  jsVideos: state.jsVideos,
  modal: state.modal
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
  },
  openModal(visible, video) {
    dispatch(handleModal(visible, video));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
