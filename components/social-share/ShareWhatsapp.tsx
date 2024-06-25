import { WhatsappIcon, WhatsappShareButton } from "react-share";

export default function ShareWhatsapp({ shareUrl }: { shareUrl: string }) {
  return (
    <WhatsappShareButton
      url={shareUrl}
      separator=":: "
      className="Demo__some-network__share-button"
    >
      <WhatsappIcon size={32} round />
    </WhatsappShareButton>
  );
}
