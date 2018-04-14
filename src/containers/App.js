import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import {
  doSearch,
  getLastReactVideos,
  getLastJsVideos
} from '../actions/index';

class App extends Component {
  componentDidMount() {
    this.props.getReactVideos();
    this.props.getJsVideos();
  }
  render() {
    return (
      <div>
        <SearchBar
          value={this.props.searchTerm}
          handleSearch={this.props.handleSearch}
        />
      </div>
    );
  }
}

App.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getReactVideos: PropTypes.func.isRequired,
  getJsVideos: PropTypes.func.isRequired
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
