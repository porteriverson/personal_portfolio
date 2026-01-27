import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Elephrend",
  description:
    "Elephrend Privacy Policy - Learn how we collect, use, store, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-black min-h-screen pt-10">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10 pb-16">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-400 mb-6 italic">Last Updated: January 26, 2026</p>

        <p className="text-[15px] leading-[22px] text-gray-300 mb-5">
          Welcome to Elephrend. We take your privacy seriously and are committed to protecting your
          personal information. This Privacy Policy explains how we collect, use, store, and
          protect your data when you use our mobile application.
        </p>

        <div className="bg-indigo-500/10 p-4 rounded-lg mb-6">
          <h2 className="text-base font-semibold text-white mb-3">Key Privacy Principles:</h2>
          <ul className="space-y-2 text-[15px] leading-[22px] text-gray-300">
            <li className="pl-2">
              • Privacy-First Design: Your data is encrypted and stored locally on your device
            </li>
            <li className="pl-2">
              • Minimal Data Collection: We only collect what's necessary to provide the service
            </li>
            <li className="pl-2">
              • Anonymization: Personal data is anonymized before AI processing
            </li>
            <li className="pl-2">
              • No Third-Party Tracking: We do not use third-party analytics or tracking
            </li>
            <li className="pl-2">
              • User Control: You control your data and can export or delete it at any time
            </li>
          </ul>
        </div>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">1. Information We Collect</h2>

        <h3 className="text-base font-semibold text-white mt-4 mb-2">1.1 Account Information</h3>
        <p className="text-[15px] leading-[22px] text-gray-300 mb-3">When you create an account, we collect:</p>
        <ul className="space-y-2 text-[15px] leading-[22px] text-gray-300 mb-4">
          <li className="pl-2">• Email address (required for authentication)</li>
          <li className="pl-2">• Full name (required)</li>
          <li className="pl-2">• Phone number (optional)</li>
          <li className="pl-2">
            • Password (encrypted and never stored in plain text)
          </li>
        </ul>

        <h3 className="text-base font-semibold text-white mt-4 mb-2">1.2 Contact Information</h3>
        <p className="text-[15px] leading-[22px] text-gray-300 mb-3">Information you provide about your contacts:</p>
        <ul className="space-y-2 text-[15px] leading-[22px] text-gray-300 mb-4">
          <li className="pl-2">• Names and relationships</li>
          <li className="pl-2">• Birthdays and important dates</li>
          <li className="pl-2">• Interests, preferences, and notes</li>
          <li className="pl-2">• Photos (stored locally or in encrypted cloud storage)</li>
          <li className="pl-2">• Tags and metadata</li>
        </ul>

        <h3 className="text-base font-semibold text-white mt-4 mb-2">1.3 Conversation Data</h3>
        <p className="text-[15px] leading-[22px] text-gray-300 mb-3">When you log conversations:</p>
        <ul className="space-y-2 text-[15px] leading-[22px] text-gray-300 mb-4">
          <li className="pl-2">
            • Voice recordings (temporarily during transcription, then optionally deleted)
          </li>
          <li className="pl-2">• Text transcripts (encrypted)</li>
          <li className="pl-2">• AI-generated summaries and insights</li>
          <li className="pl-2">• Topics, sentiment analysis, and action items</li>
          <li className="pl-2">• Dates and timestamps</li>
        </ul>

        <h3 className="text-base font-semibold text-white mt-4 mb-2">1.4 What We Do NOT Collect</h3>
        <ul className="space-y-2 text-[15px] leading-[22px] text-gray-300 mb-4">
          <li className="pl-2">• We do not collect your precise location</li>
          <li className="pl-2">
            • We do not access your device contacts without permission
          </li>
          <li className="pl-2">• We do not collect biometric data</li>
          <li className="pl-2">
            • We do not track your activity across other apps or websites
          </li>
        </ul>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">2. How We Use Your Information</h2>

        <h3 className="text-base font-semibold text-white mt-4 mb-2">2.1 To Provide Core Services</h3>
        <ul className="space-y-2 text-[15px] leading-[22px] text-gray-300 mb-4">
          <li className="pl-2">• Authenticate your account and maintain your session</li>
          <li className="pl-2">
            • Store and sync your contacts, conversations, events, and gift ideas
          </li>
          <li className="pl-2">
            • Generate AI-powered gift suggestions and conversation insights
          </li>
          <li className="pl-2">• Send event reminders and notifications</li>
        </ul>

        <h3 className="text-base font-semibold text-white mt-4 mb-2">2.2 AI Processing</h3>
        <ul className="space-y-2 text-[15px] leading-[22px] text-gray-300 mb-4">
          <li className="pl-2">
            • Your conversation transcripts are anonymized before being sent to Claude AI
          </li>
          <li className="pl-2">
            • Names and identifying information are replaced with generic placeholders
          </li>
          <li className="pl-2">
            • AI responses are cached using hashed keys (no personal data in cache keys)
          </li>
          <li className="pl-2">
            • Claude AI operates in zero-retention mode (does not store your data)
          </li>
        </ul>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">3. How We Store and Protect Your Data</h2>

        <h3 className="text-base font-semibold text-white mt-4 mb-2">3.1 Local Storage</h3>
        <ul className="space-y-2 text-[15px] leading-[22px] text-gray-300 mb-4">
          <li className="pl-2">
            • Primary Storage: All data is stored locally on your device using SQLite
          </li>
          <li className="pl-2">
            • Encryption: Local database is encrypted using SQLCipher (256-bit AES encryption)
          </li>
          <li className="pl-2">
            • Access Control: Only you can access your encrypted local data
          </li>
        </ul>

        <h3 className="text-base font-semibold text-white mt-4 mb-2">3.2 Cloud Backup (Optional)</h3>
        <ul className="space-y-2 text-[15px] leading-[22px] text-gray-300 mb-4">
          <li className="pl-2">• Provider: Supabase (PostgreSQL database)</li>
          <li className="pl-2">
            • Encryption: Data is encrypted in transit (TLS) and at rest
          </li>
          <li className="pl-2">
            • Row-Level Security: Database policies ensure you can only access your own data
          </li>
          <li className="pl-2">
            • Sync: Background sync keeps your data updated across devices
          </li>
        </ul>

        <h3 className="text-base font-semibold text-white mt-4 mb-2">3.3 Security Measures</h3>
        <ul className="space-y-2 text-[15px] leading-[22px] text-gray-300 mb-4">
          <li className="pl-2">
            • Passwords are hashed using industry-standard algorithms
          </li>
          <li className="pl-2">
            • All network communications use HTTPS/TLS encryption
          </li>
          <li className="pl-2">
            • Authentication tokens are securely stored in device keychain
          </li>
          <li className="pl-2">• Regular security audits and updates</li>
        </ul>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">4. Data Sharing and Third Parties</h2>

        <div className="text-[15px] leading-[22px] text-gray-300 mb-4 p-3 bg-green-500/10 rounded-lg font-medium">
          We Do NOT Sell Your Data: We will never sell, rent, or trade your personal information
          to third parties for marketing purposes.
        </div>

        <h3 className="text-base font-semibold text-white mt-4 mb-2">4.1 Third-Party Services</h3>
        <p className="text-[15px] leading-[22px] text-gray-300 mb-3">We use the following third-party services:</p>
        <ul className="space-y-2 text-[15px] leading-[22px] text-gray-300 mb-4">
          <li className="pl-2">
            • Supabase: User authentication and optional cloud backup
          </li>
          <li className="pl-2">
            • Claude AI by Anthropic: Generate gift suggestions (anonymized data, zero retention)
          </li>
          <li className="pl-2">
            • Apple Services: iOS Speech Framework (on-device), Push Notifications
          </li>
        </ul>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">5. Your Privacy Rights and Choices</h2>

        <ul className="space-y-2 text-[15px] leading-[22px] text-gray-300 mb-4">
          <li className="pl-2">
            • Access Your Data: View and export all your data within the App
          </li>
          <li className="pl-2">
            • Correct or Update Data: Edit any information through the App
          </li>
          <li className="pl-2">
            • Delete Your Data: Delete individual items or your entire account
          </li>
          <li className="pl-2">
            • Control Cloud Sync: Disable cloud sync and use only local storage
          </li>
          <li className="pl-2">
            • Opt-Out of AI Features: Disable AI-powered features in Settings
          </li>
        </ul>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">6. Data Retention</h2>
        <ul className="space-y-2 text-[15px] leading-[22px] text-gray-300 mb-4">
          <li className="pl-2">
            • Active Accounts: We retain your data as long as your account is active
          </li>
          <li className="pl-2">
            • Deleted Accounts: Cloud data is deleted within 30 days of account deletion
          </li>
          <li className="pl-2">
            • Local Data: Deleted immediately when you delete the App or your account
          </li>
        </ul>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">7. Children's Privacy</h2>
        <ul className="space-y-2 text-[15px] leading-[22px] text-gray-300 mb-4">
          <li className="pl-2">• The App is not intended for children under 13</li>
          <li className="pl-2">
            • We do not knowingly collect information from children under 13
          </li>
          <li className="pl-2">
            • If we discover we have collected data from a child under 13, we will delete it
            immediately
          </li>
        </ul>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">8. Your Rights (GDPR & CCPA)</h2>
        <p className="text-[15px] leading-[22px] text-gray-300 mb-3">
          If you are in the EU or California, you have additional rights including:
        </p>
        <ul className="space-y-2 text-[15px] leading-[22px] text-gray-300 mb-4">
          <li className="pl-2">• Right to access your personal data</li>
          <li className="pl-2">• Right to correct inaccurate data</li>
          <li className="pl-2">• Right to delete your data</li>
          <li className="pl-2">• Right to data portability</li>
          <li className="pl-2">• Right to non-discrimination</li>
        </ul>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">9. Changes to This Privacy Policy</h2>
        <p className="text-[15px] leading-[22px] text-gray-300 mb-4">
          We may update this Privacy Policy from time to time. We will notify you of material
          changes via email or in-app notification. Continued use of the App after changes
          constitutes acceptance of the new policy.
        </p>

        <h2 className="text-xl font-bold text-white mt-6 mb-3">10. Contact Us</h2>
        <p className="text-[15px] leading-[22px] text-gray-300 mb-3">
          If you have questions or requests regarding your privacy:
        </p>
        <ul className="space-y-2 text-[15px] leading-[22px] text-gray-300 mb-4">
          <li className="pl-2">Email: privacy@elephrend.com</li>
          <li className="pl-2">Response Time: Within 30 days</li>
        </ul>

        <div className="text-[15px] leading-[22px] text-gray-300 mt-6 p-4 bg-indigo-500/10 rounded-lg italic">
          Transparency Commitment: We believe in radical transparency about data practices. We will
          never use your data for purposes not disclosed in this policy, and we will always
          prioritize your privacy over our business interests.
        </div>
      </div>
    </div>
  );
}
