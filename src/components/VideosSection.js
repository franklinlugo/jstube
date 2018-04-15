import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const VideoSection = styled.section`
  width: 100%;
  margin-top: 16px;
`;

const SectionTitle = styled.h4`
  margin: 0;
`;

const VideoList = styled.ul`
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
`;

const VideoListItem = styled.li`
    width: 220px;    
    display: inline-block;
    margin-right: 8px;
    vertical-align: top;
    &:hover {
        cursor: pointer:
    }
`;

const VideoThumbnail = styled.img`
  width: 100%;
  height: 123.75px;
`;
const VideoTitle = styled.h5`
  white-space: normal;
  margin: 0;
`;

// eslint-disable-next-line
const VideoDescription = styled.p``;

const VideosSection = ({ title, items, handleClickVideo }) => (
  <VideoSection>
    <SectionTitle>Last videos of {title}</SectionTitle>
    <VideoList>
      {items.map(video => (
        <VideoListItem
          key={video.id.videoId}
          onClick={() => handleClickVideo(video.id.videoId)}
        >
          <VideoThumbnail src={video.snippet.thumbnails.medium.url} />
          <VideoTitle>{video.snippet.title}</VideoTitle>
        </VideoListItem>
      ))}
    </VideoList>
  </VideoSection>
);

VideosSection.defaultProps = {
  title: '',
  items: []
};

VideosSection.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array,
  handleClickVideo: PropTypes.func.isRequired
};

export default VideosSection;
