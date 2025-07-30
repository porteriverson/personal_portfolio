import ResumePage from '@/components/resumePage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Porter Iverson', // This title will appear when on the About Us page
  description: 'Learn more about our company and mission.',
};

export default function resume() {
    return (
        <>  
            <ResumePage />
        </>
    )
}