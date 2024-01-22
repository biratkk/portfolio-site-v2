import { EntrySkeletonType } from "contentful";
import { CF_Date, CF_Image, CF_Text, createObject } from ".";

export type Blog = {
  title: CF_Text;
  dateAndTime: CF_Date;
  previewDescription: CF_Text;
  blogContent: CF_Text;
  author: CF_Text;
  authorImage: CF_Image;
};
export type BlogSkeleton = EntrySkeletonType<Blog, "blogPost">

export const blog = createObject<Blog, "blogPost">();