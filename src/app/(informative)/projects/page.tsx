import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Projects | Porter Iverson', // This title will appear when on the About Us page
  description: 'Learn more about our company and mission.',
};

export default function projects () {
    return (
        <>
            <h1 className="text-3xl font-bold text-center my-8">Projects</h1>
            <p className="text-center text-gray-600 mb-4">Here are some of the projects I&apos;ve worked on:</p>
            {/* Add your project components or list here */}
        </>
    )
}