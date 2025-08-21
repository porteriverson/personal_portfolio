// AboutClientPage.tsx
"use client";
import React, { useState } from "react";
import TimelineList from "@/components/timelineList";
import ContactModal from "@/components/ContactModal";
import { TimelineItemProps } from "@/components/timelineItem";

export default function AboutClientPage() {
  const [showContactModal, setShowContactModal] = useState(false);
  const openContactModal = () => setShowContactModal(true);
  const closeContactModal = () => setShowContactModal(false);

  const timelineItems: TimelineItemProps[] = [
    {
      id: "high-school",
      color: "#ed7b49",
      icon: "notifications",
      title: "Fremont High School",
      dateTime: "2018-2020",
      description:
        "I love to be involved in my community. I discovered this passion in high school as I went to events and participated as much as possible. My senior year was jam packed! I was the Student Body President and the captain the soccer team. I also played on the golf team. Planning our biggest events and competing for Fremont filled me with school pride. A few months before graduation, COVID-19 shut us down. Ask me about how I kept the school united during the pandemic.",
      buttonText: `Ask Me →`,
      imageUrl: "/graduation.png",
    },
    {
      id: "Mission",
      color: "#ed7b49",
      icon: "flag",
      title: "Texas McAllen Mission",
      dateTime: "2021-2023",
      description:
        "There is joy in serving others! For 2 years I lived in the Rio Grande Valley of Southern Texas. I learned Spanish and how to connect with people from diverse backrounds. I was assigned to leadership positions which helped me develop interpersonal skills as I trained hundreds of missionaries on best practices and lead by example. ",
      buttonText: `Speak Spanish With Me →`,
      imageUrl: "/missionary.png",
    },
    {
      id: "BYU-Soccer",
      color: "#ed7b49",
      icon: "trophy",
      title: "BYU Soccer",
      dateTime: "2023-Present",
      description:
        "Competing at the highest level and winning back to back National Championships requires teamwork, unity and more. Brotherhood, is the best word to describe my experience playing soccer at BYU. I am now in the leadership group to prepare and motivate the team to win another national chapmionship in November.",
      buttonText: `Connect Through Soccer →`,
      imageUrl: "/soccer.png",
    },
    {
      id: "Information-Systems",
      color: "#ed7b49",
      icon: "shopping_cart",
      title: "Master of Information Systems Management",
      dateTime: "2023-Present",
      description: `Since beginning the Information Systems program, my persistent feeling has been, "Finally, I'm learning what I want to learn!" I'm deeply interested in the potential of technology. I study daily to sharpen my skills in web development, business anaytics, software engineering, and product management. My expected graduation date is April 2027.`,
      imageUrl: "/Iverson,Porter.png",
      buttonText: `Learn More →`,
    },
  ];

  return (
    <div className="min-h-screen bg-black p-4 flex justify-center">
      <div className="w-full max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
            Defining Moments
          </h1>
        </div>
        <TimelineList items={timelineItems} onButtonClick={openContactModal} />
      </div>
      <ContactModal
        show={showContactModal}
        onClose={closeContactModal}
      />
    </div>
  );
}
