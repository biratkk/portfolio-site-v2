import { InferGetServerSidePropsType } from "next";
import { timelineEvent } from "../../components/contentful/timeline";
import Timeline, { TimelineItem } from "../../components/Timeline";

export async function getServerSideProps() {
  const timelineEventDetails = await timelineEvent.getEntries({
    content_type: "timelineEvent",
  });
  return { props: { timelineEventDetails } };
}

export default function Projects({
  timelineEventDetails,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="">
      <Timeline>
        {timelineEventDetails.items.sort((a, b) => Date.parse(b.fields.startDate) - Date.parse(a.fields.startDate)).map((event, idx) => (
          <TimelineItem
            key={idx}
            title={event.fields.name}
            description={event.fields.description}
            date={new Date(event.fields.startDate)}
          />
        ))}
      </Timeline>
    </div>
  );
}
