import ShareFacebook from "../../social-share/ShareFacebook";
import ShareLinkedin from "../../social-share/ShareLinkedin";
import ShareTelegram from "../../social-share/ShareTelegram";
import ShareTwitter from "../../social-share/ShareTwitter";
import ShareWhatsapp from "../../social-share/ShareWhatsapp";
import { OverviewTranslate } from "../../courses/Overview";

// const URL = process.env.BASE_URL;

export default function ShareModal({
  overviewTranslate,
  setIsOpen,
  courseId,
}: {
  overviewTranslate: OverviewTranslate;
  setIsOpen: (arg: boolean) => void;
  courseId: number;
}) {
  return (
    <>
      <div
        onClick={() => setIsOpen(false)}
        className="min-w-screen h-screen fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-80"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg relative mx-auto"
        >
          <h1 className="text-center text-2xl text-red-500 dark:text-red-400 mb-6">
            {overviewTranslate.sharesoc}
          </h1>
          <div className="text-center p-4 flex gap-6 justify-center">
            <ShareFacebook
              shareUrl={`https://tbc-academy-opal.vercel.app/courses/${courseId}`}
            />
            <ShareTwitter
              shareUrl={`https://tbc-academy-opal.vercel.app/courses/${courseId}`}
            />
            <ShareLinkedin
              shareUrl={`https://tbc-academy-opal.vercel.app/courses/${courseId}`}
            />
            <ShareTelegram
              shareUrl={`https://tbc-academy-opal.vercel.app/courses/${courseId}`}
            />
            <ShareWhatsapp
              shareUrl={`https://tbc-academy-opal.vercel.app/courses/${courseId}`}
            />
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="mt-6 py-2 px-4 bg-red-400 dark:bg-red-600 text-white rounded-lg hover:bg-red-600 dark:hover:bg-red-700 transition-colors duration-300 mx-auto block"
          >
            {overviewTranslate.close}
          </button>
        </div>
      </div>
    </>
  );
}
