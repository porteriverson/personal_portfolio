import React from 'react';
import type { Metadata } from 'next';
import AboutClientPage from './AboutClientPage'; // Import the new client component

export const metadata: Metadata = {
  title: 'About | Porter Iverson',
  description: 'Learn more about my journey so far and the experiences that have shaped me.',
};

export default function About() {
  return <AboutClientPage />;
}