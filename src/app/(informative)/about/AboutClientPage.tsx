'use client';
import React, { useState } from 'react';
import TimelineList from '@/components/timelineList';
import ContactModal from '@/components/ContactModal';
import { TimelineItemProps } from '@/components/timelineItem';

export default function AboutClientPage() {
  const [showContactModal, setShowContactModal] = useState(false);
  const contactDetails = {
    email: 'porteriverson93@gmail.com',
    phone: '801-823-7731',
    linkedin: 'https://linkedin.com/in/porteriverson',
  };

  const openContactModal = () => setShowContactModal(true);
  const closeContactModal = () => setShowContactModal(false);

  const timelineItems: TimelineItemProps[] = [
    {
      id: "high-school",
      color: "dark",
      icon: "notifications",
      title: "High School",
      dateTime: "2018-2020",
      description: "Loving to be involved, I was the Student Body President along with playing on the soccer and golf teams. Planning big events and competing for my school filled me with school pride. Ask me about how I kept the school united when COVID-19 shut us down.",
      buttonText: `Ask Me →`,
      imageUrl: "/graduation.png",
    },
    {
      id: "Mission",
      color: "error",
      icon: "flag",
      title: "Texas McAllen Mission",
      dateTime: "2021-2023",
      description: "Living in the Rio Grande Valley I learned Spanish and how to connect with people from diverse backrounds. Assigned to leadership positions, I developed interpersonal skills and trained hundreds of missionaries on best practices and lead by example",
      buttonText: `Ask Me →`,
      imageUrl: "/missionary.png",
    },
    {
      id: "BYU-Soccer",
      color: "blue",
      icon: "trophy",
      title: "BYU Soccer",
      dateTime: "2023-Present",
      description: "Competing at the highest level and winning back to back National Championships requires teamwork, unity, brotherhood and more. I am now one of the captains of the team, planning and preparing win another national chapmionship in November.",
      buttonText: `Ask Me →`,
      imageUrl: "/soccer.png",
    },
    {
      id: "Information-Systems",
      color: "success",
      icon: "shopping_cart",
      title: "Master of Information Systems Management",
      dateTime: "2023-Present",
      description: "Studying daily to sharpen my skills in web development, business anaytics, software engineering, and product management. I am thrilled to ",
      imageUrl: "/Iverson,Porter.png",
      buttonText: `Ask Me →`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex justify-center">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <h4 className="text-black p-4 rounded-lg shadow-md text-xl font-bold inline-block">My Journey So Far</h4>
        </div>
        <TimelineList title="Timeline" items={timelineItems} onButtonClick={openContactModal} />
      </div>
      <ContactModal show={showContactModal} onClose={closeContactModal} contactDetails={contactDetails} />
    </div>
  );
}