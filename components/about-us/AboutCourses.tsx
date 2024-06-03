import MainInfo from "../main-info/MainInfo";

export default function AboutCourses() {
  return (
    <div
      className="h-[290px]  content-center items-center "
      style={{
        backgroundImage: "url('/images/learning-banner.png')",
      }}
    >
      <MainInfo />
    </div>
  );
}
