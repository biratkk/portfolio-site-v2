import {
  EntriesQueries,
  Entry,
  EntryCollection,
  EntryFieldTypes,
  EntrySkeletonType,
  FieldsType,
  createClient,
} from "contentful";

export type CF_Text = EntryFieldTypes.Text;
export type CF_Date = EntryFieldTypes.Date;
export type CF_Image = EntryFieldTypes.AssetLink;

const client = createClient({
  accessToken: process.env.CONTENTFUL_KEY || "",
  space: process.env.SPACE_ID || "",
  environment: "master", // defaults to 'master' if not set
});

export type ObjectEntriesResponse<ObjectSkeleton extends EntrySkeletonType> =
  EntryCollection<ObjectSkeleton, undefined, string>;

export type ObjectEntryResponse<ObjectSkeleton extends EntrySkeletonType> =
  Entry<ObjectSkeleton, undefined, string>;

export const createObject = <
  ObjectType extends FieldsType,
  ObjectTypeId extends string
>() => {
  type Skeleton = EntrySkeletonType<ObjectType, ObjectTypeId>;
  type EntriesResponse = ObjectEntriesResponse<Skeleton>;
  type EntryResponse = ObjectEntryResponse<Skeleton>;
  return {
    getEntry: (id: string): Promise<EntryResponse> =>
      client.getEntry<Skeleton>(id),
    getEntries: (
      query?: EntriesQueries<
        EntrySkeletonType<ObjectType, ObjectTypeId>,
        undefined
      >
    ): Promise<EntriesResponse> => client.getEntries<Skeleton>(query),
  } as const;
};
