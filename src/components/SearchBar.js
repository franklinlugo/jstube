import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 8px 16px;
`;

const InputSearch = styled.input`
  flex: 0 1 50%;
  padding: 8px 16px;
  font-size: 16px;
`;

const SearchBar = ({ value, handleSearch }) => (
  <SearchBarWrapper>
    <InputSearch
      name="search"
      placeholder="Search"
      onChange={handleSearch}
      value={value}
    />
  </SearchBarWrapper>
);

SearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired
};

export default SearchBar;
