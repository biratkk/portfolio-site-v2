import {
  createClient,
  Entry,
  EntryCollection,
  EntryFieldType,
  EntryFieldTypes,
} from "contentful";

export type Skeleton<ContentTypeId, ItemType> = {
  contentTypeId: ContentTypeId;
  fields: ItemType;
};

export type Blog = {
  title: CF_Text;
  dateAndTime: CF_Date;
  previewDescription: CF_Text;
  blogContent: CF_Text;
  author: CF_Text;
  authorImage: CF_Image;
};

export type BlogEntriesResponse = EntryCollection<
  BlogSkeleton,
  undefined,
  string
>;

export type BlogEntryResponse = Entry<BlogSkeleton, undefined, string>;

export type BlogTypeId = "blogPost";

export type BlogSkeleton = Skeleton<BlogTypeId, Blog>;
export type CF_Text = EntryFieldTypes.Text;
export type CF_Date = EntryFieldTypes.Date;
export type CF_Image = EntryFieldTypes.AssetLink;

const settings = {
  accessToken: process.env.CONTENTFUL_KEY || "",
  space: process.env.BLOG_SPACE_ID || "",
  environment: "master", // defaults to 'master' if not set
};

export const client = createClient(settings);

export const getBlogEntries = (): Promise<BlogEntriesResponse> =>
  client.getEntries<BlogSkeleton>();

export const getBlogEntry = (entryId: string): Promise<BlogEntryResponse> =>
  client.getEntry<BlogSkeleton>(entryId);
