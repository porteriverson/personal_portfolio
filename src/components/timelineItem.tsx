// components/TimelineItem.tsx
import React from 'react';
import { LucideBell, LucideFlag, LucidePackage, LucideShoppingCart, LucideTrophy } from 'lucide-react'; // Assuming you're using lucide-react for icons

// Define the interface for TimelineItem's props
export interface TimelineItemProps {
  id: string; // Unique identifier for the item, used as React's 'key'
  icon: string; // String identifier for the icon (e.g., "notifications")
  color: 'dark' | 'error' | 'success' | string; // Custom color names or direct Tailwind class
  title: string;
  description: string;
  dateTime: string;
  lastItem?: boolean; // Optional prop to indicate if it's the last item in the list
}

// Map custom color names to Tailwind CSS classes
const colorMap: Record<string, string> = {
  dark: 'bg-gray-700 border-gray-700',
  error: 'bg-red-500 border-red-500',
  success: 'bg-green-500 border-green-500',
  blue: 'bg-blue-500 border-blue-500',
  // Add more mappings or handle direct Tailwind classes if 'color' is already a full class
};

// Map icon string identifiers to Lucide React components
const iconMap: Record<string, React.ReactNode> = {
  notifications: <LucideBell className="w-5 h-5 text-white" />,
  flag: <LucideFlag className="w-5 h-5 text-white" />,
  trophy: <LucideTrophy className="w-5 h-5 text-white" />,
  inventory_2: <LucidePackage className="w-5 h-5 text-white" />,
  shopping_cart: <LucideShoppingCart className="w-5 h-5 text-white" />,
  // Add more icon mappings as needed
};

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, color, title, description, dateTime, lastItem }) => {
  // Determine the background and border color based on the color prop
  const resolvedColorClasses = colorMap[color] || color; // Use mapped color or direct color if it's a Tailwind class

  return (
    <li className="relative mb-8 flex items-start">
      {/* Timeline dot/icon container */}
      <div
        className={`absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 ${resolvedColorClasses} text-sm font-bold z-10`}
      >
        {iconMap[icon] || <LucideBell className="w-5 h-5 text-white" />} {/* Render mapped icon or fallback */}
      </div>

      {/* Vertical Line */}
      {!lastItem && (
        <div className="absolute left-0.5 top-6 h-full w-0.5 bg-gray-300"></div>
      )}

      {/* Content Card */}
      <div className="ml-7 p-4 bg-white rounded-lg shadow-md flex-1">
        <h4 className="font-semibold text-lg text-gray-800 mb-1">{title}</h4>
        <span className="text-xs font-medium text-gray-800">{dateTime}</span>
        <p className="text-sm text-gray-600 mb-2 max-w-prose">{description}</p>
      </div>
    </li>
  );
};

export default TimelineItem;