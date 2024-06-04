import React from "react";
const coursesTest = [
  { title: "Angular", color: "red" },
  { title: "Bootstrap", color: "pink" },
  { title: "CSS3", color: "purple" },
  { title: "Docker Development", color: "deep-purple" },
  { title: "Gatsby", color: "indigo" },
  { title: "GraphQL", color: "blue" },
  { title: "Javascript", color: "light-blue" },
  { title: "Node JS Frontend Development", color: "cyan" },
  { title: "Python Development", color: "teal" },
  { title: "React", color: "green" },
  { title: "React Native", color: "light-green" },
  { title: "Swift Developer", color: "lime-green" },
  { title: "UX/UI Design", color: "yellow-greenish" },
  { title: "WordPress", color: "orange-yellowish" },
];

const tags = [
  { label: "CSS", value: "css" },
  { label: "HTML", value: "html" },
  { label: "Javascript", value: "javascript" },
  { label: "MySQL", value: "mysql" },
  { label: "PHP", value: "php" },
  { label: "Python", value: "python" },
];

const level = [
  { label: "Beginner", value: "beginner" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Expert", value: "expert" },
];
const price = [
  { label: "Free", value: "free" },
  { label: "Paid", value: "paid" },
];

export default function CourseCategories() {
  return (
    <div className="flex flex-col mt-6">
      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-sm border px-6 py-4 font-sans">
          <h2 className="text-xl font-bold mb-4 text-[#002058]">
            Course Categories
          </h2>
          <ul className="  flex flex-col gap-5">
            {coursesTest.map((course) => (
              <li
                key={course.title}
                className="flex items-center gap-2 text-[#002058] hover:text-[#FF6575]
                 transition-all duration-300 cursor-pointer"
              >
                <input type="checkbox" className="w-4 h-4" />
                {course.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-sm border px-6 py-4 font-sans">
          <h2 className="text-xl font-bold mb-4 text-[#002058]">Tags</h2>
          <ul className="  flex flex-col gap-5">
            {tags.map((course) => (
              <li
                key={course.label}
                className="flex gap-2 text-[#002058] items-center hover:text-[#FF6575]
                 transition-all duration-300 cursor-pointer"
              >
                <input type="checkbox" />
                {course.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-sm border px-6 py-4 font-sans">
          <h2 className="text-xl font-bold mb-4 text-[#002058]">Level</h2>
          <ul className="  flex flex-col gap-5">
            {level.map((course) => (
              <li
                key={course.label}
                className="flex gap-2 items-center text-[#002058] hover:text-[#FF6575]
                 transition-all duration-300 cursor-pointer"
              >
                <input type="checkbox" />
                {course.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <div className="bg-white rounded-lg shadow-sm border px-6 py-4 font-sans">
          <h2 className="text-xl font-bold mb-4 text-[#002058]">Price</h2>
          <ul className="  flex flex-col gap-5">
            {price.map((course) => (
              <li
                key={course.label}
                className="flex items-center gap-2 text-[#002058] hover:text-[#FF6575]
                 transition-all duration-300 cursor-pointer"
              >
                <input type="checkbox" />
                {course.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
