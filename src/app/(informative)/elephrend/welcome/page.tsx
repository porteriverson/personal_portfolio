import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Email Verified | Elephrend",
  description: "Thanks for signing up for Elephrend — your email is verified.",
};

export default function ElephrendWelcomeVerifiedPage() {
  return (
    <div className="bg-black min-h-screen pt-10">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 pb-16">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-3 rounded-full bg-green-500/10 px-4 py-2 mb-6">
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-green-500/20"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="text-sm font-medium text-green-200">Email verified</span>
          </div>

          <h1 className="text-4xl font-bold text-white mb-3">Thanks for signing up for Elephrend</h1>
          <p className="text-[15px] leading-[22px] text-gray-300 mb-4">
            Your email has been verified successfully.
          </p>
          <p className="text-[15px] leading-[22px] text-gray-300">
            You can close this page and return to the Elephrend app.
          </p>
        </div>
      </div>
    </div>
  );
}

