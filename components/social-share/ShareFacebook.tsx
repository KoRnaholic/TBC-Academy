"use client";
import { FacebookShareButton } from "react-share";
import { FacebookIcon } from "react-share";

export default function ShareFacebook({ shareUrl }: { shareUrl: string }) {
  return (
    <>
      <FacebookShareButton
        url={shareUrl}
        className="Demo__some-network__share-button"
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </>
  );
}
