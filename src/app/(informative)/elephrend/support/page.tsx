import type { Metadata } from "next";
import SupportForm from "./SupportForm";

export const metadata: Metadata = {
  title: "Support | Elephrend",
  description:
    "Get help with Elephrend - Contact our support team for assistance with the app.",
};

export default function SupportPage() {
  return (
    <div className="bg-black min-h-screen pt-10">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 pb-16">
        <h1 className="text-4xl font-bold text-white mb-2">Support</h1>
        <p className="text-sm text-gray-400 mb-6 italic">We&apos;re here to help</p>

        <p className="text-[15px] leading-[22px] text-gray-300 mb-5">
          If you&apos;re experiencing issues with Elephrend or have questions about the app, please fill
          out the form below and we&apos;ll get back to you as soon as possible.
        </p>

        <div className="bg-indigo-500/10 p-4 rounded-lg mb-6">
          <h2 className="text-base font-semibold text-white mb-3">Before Contacting Support:</h2>
          <ul className="space-y-2 text-[15px] leading-[22px] text-gray-300">
            <li className="pl-2">
              • Check the app settings to ensure everything is configured correctly
            </li>
            <li className="pl-2">
              • Try restarting the app if you&apos;re experiencing technical issues
            </li>
            <li className="pl-2">
              • Make sure you&apos;re using the latest version of the app
            </li>
            <li className="pl-2">
              • Include as much detail as possible about your issue or question
            </li>
          </ul>
        </div>

        <SupportForm />
      </div>
    </div>
  );
}
