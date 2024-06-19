import Image from "next/image";
import angular from "../../public/icons/courses-icons/angular.png";
import python from "../../public/icons/courses-icons/python.png";
import node from "../../public/icons/courses-icons/node.png";
import docker from "../../public/icons/courses-icons/docker.png";
import gatsby from "../../public/icons/courses-icons/gatsby.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../@/components/ui/carousel";
import { Card, CardContent } from "../../@/components/ui/card";
import { useTranslations } from "next-intl";

const coursesArr = [
  {
    image: angular,
    name: "Angular",
    quantity: 4,
  },
  {
    image: python,
    name: "Python",
    quantity: 3,
  },
  {
    image: node,
    name: "Node JS",
    quantity: 3,
  },
  {
    image: docker,
    name: "Docker",
    quantity: 2,
  },
  {
    image: gatsby,
    name: "Gatsby",
    quantity: 2,
  },
];

export default function TopCourses() {
  const t = useTranslations("Index.topcourses");
  return (
    <div className="flex justify-center w-full mb-20">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-3/4 flex items-center gap-5"
      >
        <CarouselPrevious />
        <CarouselContent>
          {coursesArr.map((course, index) => (
            <CarouselItem key={index} className="flex">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <div
                      className="flex flex-col w-[280px] justify-center items-center gap-3 rounded-xl border
             group shadow-sm hover:bg-[#4B3869] transition-all duration-500 px-20 py-5"
                    >
                      <Image
                        src={course.image}
                        alt="course"
                        quality={100}
                        className="cursor-pointer"
                      />
                      <div className="text-xl  text-[#002058] group-hover:text-white transition-all duration-500">
                        {course.name}
                      </div>
                      <p className="text-gray-500 group-hover:text-white transition-all duration-500">
                        {course.quantity} {t("courses")}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    </div>
  );
}

// <div className="flex justify-center mb-10 gap-6">
//   {coursesArr.map((course, idx) => {
//     return (
//       <div
//         key={idx}
//         className="flex flex-col justify-center items-center gap-3 rounded-xl border
//          group shadow-sm hover:bg-[#4B3869] transition-all duration-500 px-20 py-5"
//       >
//         <Image src={course.image} alt="angular" />
//         <div className="text-xl font-semibold group-hover:text-white transition-all duration-500">
//           {course.name}
//         </div>
//         <p className="text-gray-500 group-hover:text-white transition-all duration-500">
//           {course.quantity} courses
//         </p>
//       </div>
//     );
//   })}

// </div>
