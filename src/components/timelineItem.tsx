// components/TimelineItem.js
import React from 'react';

interface TimelineItemProps {
  icon: string; // Assuming icon is a string, could be an SVG or React component
  color: string; // Color for the timeline item
  title: string;
  description: string;
  dateTime: string;
  lastItem?: boolean; // Optional prop to indicate if it's the last item
}

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, color, title, description, dateTime}) => {
  // Map color names to Tailwind CSS classes
  const iconBgColor = `bg-${color}-500`; // e.g., bg-blue-500
  const iconTextColor = `text-white`; // Assuming white text for all icons
  const dotBorderColor = `border-${color}-500`; // for the outer circle border

  return (
    <li className="relative mb-6 last:mb-0">
      {/* Vertical Line (part of the overall TimelineList, but visually connected here) */}
      {/* This is the dot/icon container */}
      <div
        className={`absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 ${dotBorderColor} ${iconBgColor} ${iconTextColor} text-sm font-bold z-10`}
      >
        {/* If using react-icons, render the prop directly: {icon} */}
        {icon}
      </div>

      {/* Content Card */}
      <div className="ml-7 p-4 bg-white rounded-lg shadow-md">
        <h4 className="font-semibold text-lg text-gray-800 mb-1">{title}</h4>
        <p className="text-sm text-gray-600 mb-2">{description}</p>
        <span className="text-xs font-medium text-gray-400">{dateTime}</span>
      </div>
    </li>
  );
};

export default TimelineItem;