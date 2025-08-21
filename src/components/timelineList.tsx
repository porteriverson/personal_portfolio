// timelineList.tsx
'use client';
import React from 'react';
import TimelineItem from './timelineItem';
import type { TimelineItemProps } from './timelineItem';

interface TimelineListProps {
  items: TimelineItemProps[];
  onButtonClick?: () => void;
}

const TimelineList: React.FC<TimelineListProps> = ({ items, onButtonClick }) => {
  return (
    <div className="flex justify-center w-full">
      <ol className="relative max-w-4xl">
        {items.map((item, index) => (
          <TimelineItem
            key={item.id}
            id={item.id}
            icon={item.icon}
            color={item.color}
            title={item.title}
            description={item.description}
            dateTime={item.dateTime}
            buttonText={item.buttonText}
            imageUrl={item.imageUrl}
            onButtonClick={onButtonClick}
            index={index}
          />
        ))}
      </ol>
    </div>
  );
};

export default TimelineList;