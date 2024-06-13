import { BlogPostCollection } from "../../types/types";
import { contentGQLQuery } from "./fetch";

export const getBlogPostCollection = async () => {
  const query = `
  query BlogPostCollection {
    blogPostCollection {
      items {
        title
        overview
        tag
        blogImage {
          title
          width
          height
          url
        }
        date
        slug
      }
    }
  }`;

  const data: BlogPostCollection | undefined = await contentGQLQuery({
    query,
  });
  return data;
};
