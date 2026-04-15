import React from 'react';
import styled from 'styled-components';
import { useLocalization } from '../contexts/Language/LanguageProvider';
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
  const { locals } = useLocalization()

  return (
    <ShareContainer>
      <ShareText>{locals.shareThisPage}</ShareText>
      <ButtonsWrapper>
        <FacebookShareButton url={url} hashtag="#basketball" aria-label="Share on Facebook">
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton url={url} title={title} hashtags={['basketball']} aria-label="Share on Twitter">
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <LinkedinShareButton url={url} title={title} summary={description} aria-label="Share on LinkedIn">
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>

        <WhatsappShareButton url={url} title={title} separator=" - " aria-label="Share on WhatsApp">
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