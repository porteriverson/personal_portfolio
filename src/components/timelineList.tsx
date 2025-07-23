// components/TimelineList.js
import React from 'react';
import TimelineItem from './timelineItem';
import type {TimelineItemProps} from './timelineItem';

interface TimelineListProps {
  title: string;
  items: TimelineItemProps[];
}

const TimelineList: React.FC<TimelineListProps> = ({ title, items }) => {
  return (
    <ol className="relative border-l-2 border-gray-200">
      {/* The main vertical line is created by the left border of this ordered list */}
      <li>
        <h4>{title}</h4>
      </li>
      {items.map((item) => (
        <TimelineItem
          key={item.id} 
          id={item.id}// Important for React list rendering
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