import { EntrySkeletonType } from "contentful";
import { CF_Image, CF_Text, createObject } from ".";

export type Poem = {
  title: CF_Text;
  description: CF_Text;
  content: CF_Text;
  previewImage?: CF_Image;
};
const poemTypeId = "poems" as const;
export type PoemTypeId = typeof poemTypeId;
export type PoemSkeleton = EntrySkeletonType<Poem, PoemTypeId>
export const poem = createObject<Poem, PoemTypeId>();