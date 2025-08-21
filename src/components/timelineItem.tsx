// timelineItem.tsx
'use client';
import React from 'react';
import { LucideBell, LucideFlag, LucidePackage, LucideShoppingCart, LucideTrophy } from 'lucide-react';
import Image from 'next/image';

// Define the interface for TimelineItem's props
export interface TimelineItemProps {
  id: string;
  icon: string;
  color: 'dark' | 'error' | 'success' | string;
  title: string;
  description: string;
  dateTime: string;
  buttonText?: string;
  imageUrl?: string;
  onButtonClick?: () => void;
  index?: number; // Add the index prop here
}

const colorMap: Record<string, string> = {
  dark: 'bg-gray-700 border-gray-700',
  error: 'bg-red-500 border-red-500',
  success: 'bg-green-500 border-green-500',
  blue: 'bg-blue-500 border-blue-500',
  '#ed7b49': 'bg-[#ed7b49] border-[#ed7b49]',
};

const iconMap: Record<string, React.ReactNode> = {
  notifications: <LucideBell className="w-5 h-5 text-white" />,
  flag: <LucideFlag className="w-5 h-5 text-white" />,
  trophy: <LucideTrophy className="w-5 h-5 text-white" />,
  inventory_2: <LucidePackage className="w-5 h-5 text-white" />,
  shopping_cart: <LucideShoppingCart className="w-5 h-5 text-white" />,
};

const TimelineItem: React.FC<TimelineItemProps> = ({ icon, color, title, description, dateTime, buttonText, imageUrl, onButtonClick, index }) => {
  const resolvedColorClasses = colorMap[color] || color;
  const isOdd = index !== undefined && index % 2 !== 0;

  return (
    <li className={`relative mb-8 flex flex-col items-center sm:items-stretch sm:flex-row ${isOdd ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}>
      
      {/* Conditionally render image */}
      {imageUrl && (
        <div className={`w-full sm:w-1/2 sm:flex-none flex justify-center mb-4 sm:mb-0 ${isOdd ? 'sm:pl-8' : 'sm:pr-8'}`}>
          <Image
            src={imageUrl}
            alt={title}
            width={1000}
            height={1000}
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
      )}

      {/* Timeline dot and vertical line container */}
      <div className="relative flex-none h-full sm:h-auto">
        {/* Timeline dot/icon */}
        <div
          className={`absolute flex h-6 w-6 items-center justify-center rounded-full ${resolvedColorClasses} text-sm font-bold z-10 -top-3 sm:top-0 ${isOdd ? 'sm:-right-3' : 'sm:-left-3'}`}
        >
          {iconMap[icon] || <LucideBell className="w-5 h-5 text-white" />}
        </div>
      </div>

      {/* Content Card with optional button */}
      <div className={`p-4 bg-[#141a1a] rounded-lg shadow-md w-full flex-1 sm:w-1/2 text-white ${isOdd ? 'sm:mr-7' : 'sm:ml-7'}`}>
        <h4 className="font-semibold text-lg text-white mb-1">{title}</h4>
        <span className="text-xs font-medium text-gray-400">{dateTime}</span>
        <p className="text-sm text-gray-300 mb-2">{description}</p>
        
        {/* Button to contact me */}
        {buttonText && onButtonClick && (
          <div className="mt-4 flex justify-center">
            <button
              onClick={onButtonClick}
              className="bg-[#ed7b49] text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-700 transition-colors duration-200"
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default TimelineItem;