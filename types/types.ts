//Products page
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface ProductsResponse {
  products: Product[];
}

//Blog page
export interface Recipes {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: string[];
}

export interface BlogObject {
  recipes: Recipes[];
}

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

export interface DataResponse {
  data: Product[];
  name: {
    name: string;
    text: string;
  };
}

//Button
export interface ButtonProps {
  children: React.ReactNode;
  styles?: string;
  type?: string;
}

//SingleProduct component
export interface SingleProductProps {
  data: Product;
}

//Admin page
export interface User {
  id?: number;
  name: string;
  email: string;
  age: number;
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
