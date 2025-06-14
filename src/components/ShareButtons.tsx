import React from 'react';
import styled from 'styled-components';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
} from 'react-share';

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title, description }) => {
  return (
    <ShareContainer>
      <ShareText>Share this page:</ShareText>
      <ButtonsWrapper>
        <FacebookShareButton url={url} hashtag="#basketball">
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton url={url} title={title} hashtags={['basketball']}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <LinkedinShareButton url={url} title={title} summary={description}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <WhatsappShareButton url={url} title={title} separator=" - ">
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </ButtonsWrapper>
    </ShareContainer>
  );
};

const ShareContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
`;

const ShareText = styled.span`
  color: ${props => props.theme.text};
  font-size: 0.9rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 12px;
  
  button {
    cursor: pointer;
    transition: transform 0.2s ease;
    
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default ShareButtons; 