import { EntrySkeletonType } from "contentful";
import { CF_Date, CF_TEXT_LIST, CF_Text, createObject } from ".";

export type TimelineEvent = {
  name: CF_Text;
  description: CF_Text;
  duration: CF_Text;
  startDate: CF_Date;
};
const timelineEventId = "timelineEvent" as const;
export type TimelineEventId = typeof timelineEventId;
export type TimelineEventSkeleton = EntrySkeletonType<TimelineEvent, TimelineEventId>
export const timelineEvent = createObject<TimelineEvent, TimelineEventId>();