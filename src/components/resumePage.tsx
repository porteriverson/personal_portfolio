'use client';
import React, { useState } from 'react';

// Main ResumePage component
const ResumePage = () => {
      // State to control the visibility of the contact modal
  const [showContactModal, setShowContactModal] = useState(false);

  // Define your contact details
  const contactDetails = {
    email: 'porteriverson93@gmail.com', // Replace with your email
    phone: '801-823-7731', // Replace with your phone number
    linkedin: 'https://linkedin.com/in/porteriverson', // Replace with your LinkedIn profile
    github: 'https://github.com/', // Replace with your GitHub profile
  };

  // Function to handle opening the modal
  const openContactModal = () => {
    setShowContactModal(true);
  };

  // Function to handle closing the modal
  const closeContactModal = () => {
    setShowContactModal(false);
  };

  return (
    // Main container for the resume, centered and with responsive padding
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4 sm:p-6 lg:p-8 flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 sm:p-8 lg:p-10 my-8">

        {/* Header Section */}
        <header className="text-center mb-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-2">Porter Iverson</h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">Business Analyst | Web Developer | Innovator</p>
          <div className="flex justify-center space-x-4 mt-4 text-sm sm:text-base">
            <a href={`mailto:${contactDetails.email}`} className="text-indigo-600 dark:text-indigo-300 hover:underline">PorterIverson93@gmail.com</a>
            <a href={`tel:${contactDetails.phone}`} className="text-indigo-600 dark:text-indigo-300 hover:underline">801-823-7731</a>
            <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-300 hover:underline">LinkedIn</a>
            <a href={contactDetails.github} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-300 hover:underline">GitHub</a>
          </div>
          <button onClick={openContactModal} className="dark:bg-indigo-400 rounded-full p-4 mt-4">Contact Me</button>
        </header>

        {/* Horizontal Rule for separation */}
        <hr className="border-t-2 border-gray-200 dark:border-gray-700" />

        {/* Summary Section */}
        <section className="mt-4 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Summary</h2>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-200">
            I am an enthusiastic MISM student at BYU. My academic journey has equipped me with foundational understanding of software engineering, web development, and product management, areas where I am eager to make a significant impact. With a strong analytical mindset, I am interested in finding solutions to everyday problems. I am excited to explore opportunities where I can blend my skills and passion to make a difference in the world.
          </p>
        </section>

        {/* Experience Section */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Experience</h2>

          {/* Experience Item 1 */}
          <div className="mb-6 last:mb-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">Student Business Analyst</h3>
            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300">Office of Information Technology | Provo, UT</p>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-2">May 2025 – Present</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          {/* Experience Item 2 */}
          <div className="mb-6 last:mb-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">Freelance Web Developer</h3>
            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300"></p>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-2">November 2024 – Present</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-1">
              <li>Scaled multiple projects to support small businesses from caterers to tutors using React and Supabase</li>
              <li>Designed and built complete functionality for tour guides to take groups of 100+ high school students on international tours</li>
              <li>Participated in agile development cycles, including sprint planning, daily stand-ups, and retrospectives.</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Education</h2>
          <div className="mb-6 last:mb-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">Master of Information Systems Management</h3>
            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300">Brigham Young University | Provo, UT</p>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">September 2025 – April 2027</p>
          </div>
          <div className="mb-6 last:mb-0">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-gray-100">Bachelor of Science in Information Systems</h3>
            <p className="text-md sm:text-lg text-gray-600 dark:text-gray-300">Brigham Young University | Provo, UT</p>
            <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">September 2023 – April 2027</p>
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 dark:text-gray-200">
            <div>
              <h4 className="font-semibold text-lg mb-1">Programming Languages:</h4>
              <p> Python, JavaScript, TypeScript, SQL</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Frontend:</h4>
              <p>React, Next.js, HTML5, CSS3, Tailwind CSS</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Backend:</h4>
              <p>Node.js, Express.js, RESTful APIs</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Databases:</h4>
              <p>PostgreSQL, MySQL</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Tools & Platforms:</h4>
              <p>Git, AWS, Vercel</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Methodologies:</h4>
              <p>Agile, Scrum, Test-Driven Development (TDD)</p>
            </div>
          </div>
        </section>
        {/* Additional Experiences */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-indigo-700 dark:text-indigo-400 mb-4">Additional Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700 dark:text-gray-200">
            <div>
              <h4 className="font-semibold text-lg mb-1">Leadership Roles</h4>
              <li>Student Body President, Fremont High School</li>
              <li>3x Captain of High School Varsity Soccer Team</li>
              <li>Captain of BYU Men&apos;s Soccer Team</li>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Languages</h4>
              <li>English (native)</li>
              <li>Spanish, Advanced-Low (ACTFL)</li>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-1">Awards</h4>
              <li>Citizenship Award, 2020</li>
              <li>Men&apos;s Soccer MVP, 2019</li>
              <li>Eagle Scout, 2018</li>
            </div>
          </div>
        </section>

      </div>
      {showContactModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 w-full max-w-sm relative">
            {/* Close button */}
            <button
              onClick={closeContactModal}
              className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-2xl font-bold"
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">Contact Porter</h2>
            <div className="flex flex-col space-y-4">
              <a
                href={`mailto:${contactDetails.email}`}
                onClick={closeContactModal}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md text-center transition-colors duration-200"
              >
                Email
              </a>
              <a
                href={`sms:${contactDetails.phone}`}
                onClick={closeContactModal}
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-md text-center transition-colors duration-200"
              >
                Text
              </a>
              <a
                href={`tel:${contactDetails.phone}`}
                onClick={closeContactModal}
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-4 rounded-md text-center transition-colors duration-200"
              >
                Call
              </a>
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeContactModal}
                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-md text-center transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumePage;