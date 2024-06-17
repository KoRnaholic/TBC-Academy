import { QueryResultRow } from "@vercel/postgres";

//Products page

//Profile info component

export interface userObj {
  firstName: string;
  lastName: string;
  email: string;
}

//Search Component
export interface SearchProps {
  setSort: (sortBy: string) => void;
  sortBy: string;
  search: string;
  setSearch: (search: string) => void;
}

//Admin page
export interface User {
  id?: number;
  name: string;
  email: string;
  age: number;
}
export interface DropdownProps {
  handleUserDelete: (id: number | undefined) => void;
  handleUserEdit: (user: User) => void;
  user: User;
}

export interface EditUserProps {
  user: User;
  editIsOpen: boolean;
  setEditIsOpen: (editIsOpen: boolean) => void;
}
export interface AddUserProps {
  modalIsOpen: boolean;
  setModalIsOpen: (modalIsOpen: boolean) => void;
  addUserOptimistic: (action: User) => void;
}

//new
export interface Course {
  id: number;
  name: string;
  instructor_id: number;
  lessons: number;
  duration: string;
  rating: number;
  image: string;
  price: string;
  quantity: number;
  overview: string;
  instructor_name: string;
  instructor_surname: string;
  instructor_email: string;
  student_id: string;
  course_id: number;
}
export interface Courses {
  courses: Course[] | QueryResultRow[];
}

//SingleProductPage
export interface SingleProductParam {
  locale: string;
  id: string;
}

//Created course

export interface CreatedCourse {
  name: string;
  lessons: number;
  duration: string;
  image: string;
  price: string;
  overview: string;
  course_link: string;
  requirements: string;
  audience: string;
  what_to_learn: string;
  instructor_image?: string;
  instructor_name?: string;
  instructor_surname?: string;
  rating?: number;
}

//Blog
export interface BlogPost {
  // id: number;
  title: string;
  overview: string;
  tag: string;
  blogImage: {
    title: string;
    width: number;
    height: number;
    url: string;
  };
  slug: string;
  date: string;
}

//Blog query
export interface BlogPostCollection {
  blogPostCollection: {
    items: {
      title: string;
      overview: string;
      tag: string;
      blogImage: {
        title: string;
        width: number;
        height: number;
        url: string;
      };
      date: string;
      slug: string;
    }[];
  };
}

//User Profile
export interface UserInfo {
  name: string;
  surname: string;
  email: string;
  image: string;
  role: string;
  userId: string;
}
