import React from "react";

export default function Lesson({ link }: { link: string }) {
  return (
    <>
      <iframe
        width="1200"
        height="655"
        src={`${link}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="rounded-lg w-full lg:w-2/3 transition-all "
      ></iframe>
    </>
  );
}
