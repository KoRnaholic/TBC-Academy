import ShareFacebook from "../../social-share/ShareFacebook";
import ShareLinkedin from "../../social-share/ShareLinkedin";
import ShareTelegram from "../../social-share/ShareTelegram";
import ShareTwitter from "../../social-share/ShareTwitter";
import ShareWhatsapp from "../../social-share/ShareWhatsapp";

export default function ShareModal({
  setIsOpen,
}: {
  setIsOpen: (arg: boolean) => void;
}) {
  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className="min-w-screen h-screen fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-80"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg relative mx-auto"
        >
          <h1 className="text-center text-2xl text-red-500 mb-6">
            Share to Socials
          </h1>
          <div className="text-center p-4 flex gap-6 justify-center">
            <ShareFacebook shareUrl="" />
            <ShareTwitter shareUrl="" />
            <ShareLinkedin shareUrl="" />
            <ShareTelegram shareUrl="" />
            <ShareWhatsapp shareUrl="" />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-6 py-2 px-4 bg-red-400 text-white rounded-lg hover:bg-red-600 transition-colors duration-300 mx-auto block"
          >
            Close Share
          </button>
        </div>
      </div>
    </>
  );
}