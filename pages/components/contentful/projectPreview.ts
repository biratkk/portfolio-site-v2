import { EntrySkeletonType } from "contentful";
import { CF_Date, CF_Text, createObject } from ".";

export type ProjectPreview = {
  title: CF_Text;
  date: CF_Date;
  description: CF_Text;
  url: CF_Text;
  tags?: CF_Text;
};
const projectPreviewTypeId = "projectPreview" as const;
export type ProjectPreviewTypeId = typeof projectPreviewTypeId;
export type ProjectPreviewSkeleton = EntrySkeletonType<ProjectPreview, ProjectPreviewTypeId>
export const projectPreview = createObject<ProjectPreview, ProjectPreviewTypeId>();