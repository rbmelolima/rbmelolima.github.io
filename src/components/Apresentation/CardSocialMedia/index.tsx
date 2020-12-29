import React from 'react';
import './style.css';

type props_cardSocialMedia = {
  url: string,
}

const CardSocialMedia: React.FC<props_cardSocialMedia> = ({ url, children }) => {
  return (
    <a href={ url } target="blank" className="cardSocialMedia">
      {
        children
      }
    </a>
  );
}

export { CardSocialMedia };