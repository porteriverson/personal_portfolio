import TimelineItem from "@/components/timelineItem";
import TimelineList from "@/components/timelineList";

export default function About() {
  
  <>
  const timelineItems = [
    <TimelineItem
    color="dark"
    icon="notifications"
    title="$2400 Design changes"
    dateTime="22 DEC 7:20 PM"
    description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
  />
  <TimelineItem
    color="error"
    icon="inventory_2"
    title="New order #1832412"
    dateTime="21 DEC 11 PM"
    description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
  />
  <TimelineItem
    color="success"
    icon="shopping_cart"
    title="Server payments for April"
    dateTime="21 DEC 9:34 PM"
    description="People care about how you see the world, how you think, what motivates you, what you’re struggling with or afraid of."
    lastItem
  />
  </>
];
  return (
<>
<TimelineList title="Timeline" items={timelineItems}>
  
</TimelineList>
</>
  );
}
// high school, sports, studet government, ask me about how I guided the school through the 2020 closures
// mission in mcalledn texas, learned spanish, how to work with people, deliver and accept criticism, hard work
// BYU soccer, unity, commitment, excellence.
// Inforamtion systems, building, creating solutions for people, learning
// Web Dev
