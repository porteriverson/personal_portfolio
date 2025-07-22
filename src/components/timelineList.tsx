// components/TimelineList.js
import React from 'react';
import TimelineItem from './timelineItem';

interface TimelineListProps {
  title: string;
  items: TimelineItem[];
}

const TimelineList: React.FC<TimelineListProps> = ({ title, items }) => {
  return (
    <ol className="relative border-l-2 border-gray-200">
      {/* The main vertical line is created by the left border of this ordered list */}
      {items.map((item) => (
        <TimelineItem
          key={item.id} // Important for React list rendering
          icon={item.icon}
          color={item.color}
          title={item.title}
          description={item.description}
          dateTime={item.dateTime}
        />
      ))}
    </ol>
  );
};

export default TimelineList;