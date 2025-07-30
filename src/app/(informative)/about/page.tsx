import { TimelineItemProps } from '@/components/timelineItem';
import TimelineList from '@/components/timelineList';
import React from 'react';
import Image from 'next/image'; // Assuming you're using Next.js for image handling
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'About | Porter Iverson', // This title will appear when on the About Us page
  description: 'Learn more about my journey so far and the experiences that have shaped me.',
};


export default function About() {
  // Define timelineItems as an array of data objects (TimelineItemProps)
  const timelineItems: TimelineItemProps[] = [
    {
      id: "high-school", // Unique ID for this item
      color: "dark", // Custom color name, will be mapped in TimelineItem
      icon: "notifications",
      title: "High School",
      dateTime: "2018-2020",
      description: "Loving to be involved, I was the Student Body President along with playing on the soccer and golf teams. Planning big events and competing for my school filled me with school pride. Ask me about how I kept the school united when COVID-19 shut us down.",
    },
    {
      id: "Mission", // Unique ID
      color: "error", // Custom color name
      icon: "flag",
      title: "Texas McAllen Mission",
      dateTime: "2021-2023",
      description: "Living in the Rio Grande Valley I learned Spanish and how to connect with people from diverse backrounds. Assigned to leadership positions, I developed interpersonal skills and trained hundreds of missionaries on best practices and lead by example",
    },
    {
      id: "BYU-Soccer", // Unique ID
      color: "blue", // Custom color name
      icon: "trophy",
      title: "BYU Soccer",
      dateTime: "2023-Present",
      description: "Competing at the highest level and winning back to back National Championships requires teamwork, unity, brotherhood and more. I am now one of the captains of the team, planning and preparing win another national chapmionship in November.",
    },
    {
      id: "Information-Systems", // Unique ID
      color: "success", // Custom color name
      icon: "shopping_cart",
      title: "Master of Information Systems Management",
      dateTime: "2023-Present",
      description: "Studying daily to sharpen my skills in web development, business anaytics, software engineering,  and product management. I am thrilled to ",
    },
  ];

return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-4 gap-4 h-full">
        {/* Row 1 */}
        <div className="col-span-full flex justify-center items-center">
          <h4 className="text-black p-4 rounded-lg shadow-md text-xl font-bold">My Journey So Far</h4>
        </div>

        {/* Row 2, Column 1 - Example Placeholder */}
        <div className="flex items-center justify-center">
          <div className=" rounded-full overflow-hidden flex items-center justify-center">
          <Image
            src="/Iverson,Porter.png" // path relative to the public folder
            alt="Profile Picture"
            width={320}
            height={320}
          />
          </div>
        </div>

        {/* Row 2, Column 2 - TimelineList (Spans 2 columns for better display) */}
        <div className="col-span-2 row-span-3 flex items-start justify-center">
          <TimelineList title="Timeline" items={timelineItems} />
        </div>

        {/* Row 2, Column 3 - Example Placeholder */}
        <div className="bg-green-200 p-4 rounded-lg flex items-center justify-center text-gray-700">
          Content Cell 2
        </div>

        {/* Row 3, Column 1 - Example Placeholder */}
        <div className="bg-yellow-200 p-4 rounded-lg flex items-center justify-center text-gray-700">
          Content Cell 3
        </div>

        {/* Row 3, Column 3 - Example Placeholder */}
        <div className="bg-purple-200 p-4 rounded-lg flex items-center justify-center text-gray-700">
          Content Cell 4
        </div>

        {/* Row 4, Column 1 - Example Placeholder */}
        <div className="bg-pink-200 p-4 rounded-lg flex items-center justify-center text-gray-700">
          Content Cell 5
        </div>

        {/* Row 4, Column 2 - Example Placeholder */}
        <div className="bg-indigo-200 p-4 rounded-lg flex items-center justify-center text-gray-700">
          Content Cell 6
        </div>

        {/* Row 4, Column 3 - Example Placeholder */}
        <div className="bg-teal-200 p-4 rounded-lg flex items-center justify-center text-gray-700">
          Content Cell 7
        </div>
      </div>
    </div>
  );
}
