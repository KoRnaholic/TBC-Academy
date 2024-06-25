import { LinkedinIcon } from "lucide-react";

import { LinkedinShareButton } from "react-share";

export default function ShareLinkedin({ shareUrl }: { shareUrl: string }) {
  return (
    <LinkedinShareButton
      url={shareUrl}
      className="Demo__some-network__share-button"
    >
      <LinkedinIcon size={32} />
    </LinkedinShareButton>
  );
}
