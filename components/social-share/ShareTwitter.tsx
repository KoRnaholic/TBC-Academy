import { TwitterIcon, TwitterShareButton } from "react-share";

export default function ShareTwitter({ shareUrl }: { shareUrl: string }) {
  return (
    <>
      <TwitterShareButton
        url={shareUrl}
        className="Demo__some-network__share-button"
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
    </>
  );
}
