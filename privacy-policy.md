# Privacy Policy

**Last Updated: July 25, 2026**

## 1. Introduction

Welcome to Elephrend. This Privacy Policy explains what information the current version of the app collects, how it is used, where it is stored, and what choices you have.

**Key Privacy Principles:**
- **Local-first by default**: Elephrend stores your app data locally on your device and can also sync it to Supabase when you are signed in.
- **Permission-based access**: Contacts, microphone, speech recognition, notifications, and photo library access are only requested when needed for app features.
- **No cross-app tracking**: We do not use your data to track you across other companies' apps or websites for advertising.
- **Service providers are used to run the app**: We use third-party providers for authentication, sync, analytics, subscriptions, and AI-powered features.
- **User controls**: You can review data in the app, export your synced data, and use the current in-app local data clearing flow.
 - **User controls**: You can review data in the app, export your synced data, and delete your account and synced cloud data from within the app.

## 2. Information We Collect

### 2.1 Account Information
When you create or use an account, we collect:
- Email address
- Full name
- Phone number, if you provide one
- A user ID associated with your account

Passwords are handled by Supabase authentication. We do not store your plain-text password in this codebase.

### 2.2 Contact Information You Add to Elephrend
We collect the contact records you create or save in Elephrend, including:
- Names and relationship details
- Interests, preferences, notes, and tags
- Birthdays and event-related dates
- Contact photos you add

If sync is active, this data may be stored in Supabase so it is available across devices.

### 2.3 Device Contacts
If you grant Contacts permission, Elephrend can read selected fields from your phone contacts, including:
- Name
- Phone number
- Email address
- Birthday

For phone-linked contacts, the app is designed to keep phone numbers and email addresses from the device contact on your device instead of syncing those values to Supabase. Birthdays read directly from your phone contacts also stay local by default. If you manually enter a birthday in Elephrend for a phone-linked contact and explicitly enable birthday sync, that Elephrend-entered birthday may sync to Supabase.

### 2.4 Conversations and Notes
When you save interactions in Elephrend, we may store:
- Text transcripts
- Titles
- Dates and timestamps
- AI-generated summaries, topics, sentiment labels, and action items
- Context snapshots related to app features

If sync is active, these records may also be stored in Supabase.

### 2.5 Voice Input
If you grant Microphone and Speech Recognition permission, Elephrend can listen to your voice to generate live transcripts while you record an interaction.

In this build:
- The app requests microphone permission
- The app requests speech recognition permission
- Transcript text may be saved if you choose to save the interaction
- Audio file paths exist in the data model, but this build does not currently save synced audio recordings as part of the normal interaction flow

### 2.6 Photos
If you grant photo library permission, you can choose an image for a contact.

If sync is active:
- The image may be uploaded to Supabase Storage
- A hosted URL for that image may be stored with the contact record

### 2.7 Notifications and Preferences
We store settings and notification preferences, including:
- Reminder preferences
- Goal reminder settings
- Quiet hours and related notification settings
- Other app state and onboarding preferences

Some of this information is stored locally on device, and some goal-related information may sync to Supabase when you are signed in.

### 2.8 Product Analytics
If analytics is configured for the build, Elephrend sends product analytics events to PostHog. These events can include:
- User ID
- Email address
- Name
- Phone number
- Device type
- Locale
- Session and screen-view information
- Feature usage events, such as onboarding, recording interactions, gifts, app tour steps, and contact linking

### 2.9 Subscription Information
If purchases are configured for the build, Elephrend uses RevenueCat to manage subscriptions and entitlement status. This can include:
- App user ID
- Purchase history
- Subscription and trial status

### 2.10 Feedback and Feature Requests
If you submit feedback in the app, we may store:
- Feature request titles and descriptions
- Votes on feature requests
- Your user ID associated with that submission or vote

### 2.11 Information We Do Not Collect
In this build, Elephrend does not intentionally collect:
- Precise location
- Advertising identifiers for tracking
- Health data
- Browsing history
- Cross-app or cross-website activity for targeted advertising

## 3. How We Use Your Information

We use your information to:
- Create and maintain your account
- Sync your data across devices when sync is active
- Show your contacts, events, reminders, transcripts, and gift ideas
- Generate gift suggestions and remember summaries
- Schedule and manage local notifications
- Measure feature usage and improve the product
- Process subscriptions and restore purchases
- Review feedback and feature requests

## 4. AI Processing

Elephrend currently uses Groq-hosted AI models for some app features, including:
- Gift idea generation
- Remember summary generation

To provide these features, the app may send selected contact context and conversation text to Groq through API requests. Based on the current code, this can include:
- Contact name
- Conversation summaries
- Conversation transcript text
- Topics and sentiment labels
- Notes and preference context related to the request

The current build does **not** implement the anonymization, placeholder replacement, or zero-retention claims that appeared in older drafts of this policy.

## 5. Where Your Information Is Stored

### 5.1 On Your Device
Elephrend stores app data locally using SQLite and AsyncStorage on your device.

### 5.2 In Supabase
When you are signed in and sync runs, Elephrend may store cloud copies of:
- Contacts
- Conversations
- Conversation links
- Event links
- Events
- Gift ideas
- Goal data
- Message goal events

Supabase is also used for authentication and feature request storage.

### 5.3 In Other Service Providers
Depending on the feature:
- PostHog receives analytics events
- RevenueCat receives subscription-related data
- Groq receives AI feature request content

## 6. Third-Party Services

We currently use the following third-party services in the codebase:

### 6.1 Supabase
Used for:
- Authentication
- Cloud sync and backup
- Storage of contact photos
- Feature requests and related app data

Privacy Policy: https://supabase.com/privacy

### 6.2 PostHog
Used for:
- Product analytics
- Session, screen, and feature usage measurement

Privacy resources: https://trust.posthog.com/

### 6.3 RevenueCat
Used for:
- Subscription management
- Purchase restoration
- Entitlement and trial status

Apple privacy guidance from RevenueCat: https://www.revenuecat.com/docs/platform-resources/apple-platform-resources/apple-app-privacy

### 6.4 Groq
Used for:
- Gift idea generation
- Remember summary generation

Privacy Policy: https://groq.com/privacy-policy/

### 6.5 Apple and Platform Services
Used for:
- Speech recognition APIs
- Notification delivery
- App Store purchase processing

## 7. Tracking and Advertising

Elephrend does not use your data to track you across third-party apps or websites for advertising purposes.

We do use third-party product analytics in the current build. Those analytics are used for our own product measurement and improvement, not for cross-company targeted advertising based on the code reviewed here.

## 8. Data Retention

We retain data for as long as needed to operate the app and related services, unless you clear it or deletion is carried out by us.

In the current build:
- Local app data remains on device until you delete it, clear it through app flows, or remove the app
- Synced cloud data may remain in Supabase until it is deleted there
- Feature requests and analytics data may remain in their respective service providers according to those services and our operational needs

## 9. Your Choices

Depending on the feature, you can:
- Decline contacts, microphone, speech recognition, photo library, or notification permissions
- Skip notification or microphone setup and continue using the app with reduced functionality
- Turn birthday sync for phone-linked contacts on or off
- Export your synced data through the current export flow
- Sign out of the app

## 10. Export and Deletion

### 10.1 Data Export
The current export flow:
- Requires an internet connection
- Pulls synced data from Supabase
- Includes exported notification preferences from local storage
- Generates a JSON file that you can share or save

### 10.2 Current In-App Delete Account Flow
The current in-app delete flow:
- Deletes synced Supabase data associated with your account
- Deletes your Supabase authentication account
- Deletes local SQLite data
- Clears local AsyncStorage data
- Deletes local media directories if present
- Cancels scheduled local notifications
- Clears the local app session after deletion completes

## 11. Children's Privacy

Elephrend is not intended for children under 13, and we do not knowingly build the service to collect information from children under 13.

## 12. International Users

Elephrend is operated from the United States, and the service providers used by the app may process information in the United States or other countries where they operate.

## 13. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. If we make material changes, we may update the in-app policy, the published policy URL, or provide notice through the app or related channels.

## 14. Contact Us

If you have privacy questions or want to request deletion help for synced cloud data, contact:

**Email**: privacy@elephrend.com

**Response Time Goal**: Within 30 days
