import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Main = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoContainer = styled.div`
  max-width: 768px;
  width: 60%;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
`;

const WrapperVideo = styled.div`
  position: relative;
  padding-top: 56.25%;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const VideoModal = ({ video, closeModal }) => {
  const url = `http://www.youtube.com/embed/${video}`;
  return createPortal(
    <Main onClick={closeModal}>
      <VideoContainer>
        <WrapperVideo>
          <Iframe src={url} />
        </WrapperVideo>
      </VideoContainer>
    </Main>,
    document.getElementById('video')
  );
};

export default VideoModal;
