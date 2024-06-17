import React from "react";
import { TelegramIcon, TelegramShareButton } from "react-share";

export default function ShareTelegram({ shareUrl }: { shareUrl: string }) {
  return (
    <TelegramShareButton
      url={shareUrl}
      className="Demo__some-network__share-button"
    >
      <TelegramIcon size={32} round />
    </TelegramShareButton>
  );
}
