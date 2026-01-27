import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function PrivacyPolicyScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Privacy Policy</Text>
        <Text style={styles.date}>Last Updated: January 26, 2026</Text>

        <Text style={styles.intro}>
          Welcome to Elephrend. We take your privacy seriously and are committed to protecting your
          personal information. This Privacy Policy explains how we collect, use, store, and
          protect your data when you use our mobile application.
        </Text>

        <View style={styles.principlesBox}>
          <Text style={styles.principlesTitle}>Key Privacy Principles:</Text>
          <Text style={styles.bulletPoint}>
            • Privacy-First Design: Your data is encrypted and stored locally on your device
          </Text>
          <Text style={styles.bulletPoint}>
            • Minimal Data Collection: We only collect what's necessary to provide the service
          </Text>
          <Text style={styles.bulletPoint}>
            • Anonymization: Personal data is anonymized before AI processing
          </Text>
          <Text style={styles.bulletPoint}>
            • No Third-Party Tracking: We do not use third-party analytics or tracking
          </Text>
          <Text style={styles.bulletPoint}>
            • User Control: You control your data and can export or delete it at any time
          </Text>
        </View>

        <Text style={styles.sectionTitle}>1. Information We Collect</Text>

        <Text style={styles.subsectionTitle}>1.1 Account Information</Text>
        <Text style={styles.paragraph}>When you create an account, we collect:</Text>
        <Text style={styles.bulletPoint}>• Email address (required for authentication)</Text>
        <Text style={styles.bulletPoint}>• Full name (required)</Text>
        <Text style={styles.bulletPoint}>• Phone number (optional)</Text>
        <Text style={styles.bulletPoint}>
          • Password (encrypted and never stored in plain text)
        </Text>

        <Text style={styles.subsectionTitle}>1.2 Contact Information</Text>
        <Text style={styles.paragraph}>Information you provide about your contacts:</Text>
        <Text style={styles.bulletPoint}>• Names and relationships</Text>
        <Text style={styles.bulletPoint}>• Birthdays and important dates</Text>
        <Text style={styles.bulletPoint}>• Interests, preferences, and notes</Text>
        <Text style={styles.bulletPoint}>• Photos (stored locally or in encrypted cloud storage)</Text>
        <Text style={styles.bulletPoint}>• Tags and metadata</Text>

        <Text style={styles.subsectionTitle}>1.3 Conversation Data</Text>
        <Text style={styles.paragraph}>When you log conversations:</Text>
        <Text style={styles.bulletPoint}>
          • Voice recordings (temporarily during transcription, then optionally deleted)
        </Text>
        <Text style={styles.bulletPoint}>• Text transcripts (encrypted)</Text>
        <Text style={styles.bulletPoint}>• AI-generated summaries and insights</Text>
        <Text style={styles.bulletPoint}>• Topics, sentiment analysis, and action items</Text>
        <Text style={styles.bulletPoint}>• Dates and timestamps</Text>

        <Text style={styles.subsectionTitle}>1.4 What We Do NOT Collect</Text>
        <Text style={styles.bulletPoint}>• We do not collect your precise location</Text>
        <Text style={styles.bulletPoint}>
          • We do not access your device contacts without permission
        </Text>
        <Text style={styles.bulletPoint}>• We do not collect biometric data</Text>
        <Text style={styles.bulletPoint}>
          • We do not track your activity across other apps or websites
        </Text>

        <Text style={styles.sectionTitle}>2. How We Use Your Information</Text>

        <Text style={styles.subsectionTitle}>2.1 To Provide Core Services</Text>
        <Text style={styles.bulletPoint}>• Authenticate your account and maintain your session</Text>
        <Text style={styles.bulletPoint}>
          • Store and sync your contacts, conversations, events, and gift ideas
        </Text>
        <Text style={styles.bulletPoint}>
          • Generate AI-powered gift suggestions and conversation insights
        </Text>
        <Text style={styles.bulletPoint}>• Send event reminders and notifications</Text>

        <Text style={styles.subsectionTitle}>2.2 AI Processing</Text>
        <Text style={styles.bulletPoint}>
          • Your conversation transcripts are anonymized before being sent to Claude AI
        </Text>
        <Text style={styles.bulletPoint}>
          • Names and identifying information are replaced with generic placeholders
        </Text>
        <Text style={styles.bulletPoint}>
          • AI responses are cached using hashed keys (no personal data in cache keys)
        </Text>
        <Text style={styles.bulletPoint}>
          • Claude AI operates in zero-retention mode (does not store your data)
        </Text>

        <Text style={styles.sectionTitle}>3. How We Store and Protect Your Data</Text>

        <Text style={styles.subsectionTitle}>3.1 Local Storage</Text>
        <Text style={styles.bulletPoint}>
          • Primary Storage: All data is stored locally on your device using SQLite
        </Text>
        <Text style={styles.bulletPoint}>
          • Encryption: Local database is encrypted using SQLCipher (256-bit AES encryption)
        </Text>
        <Text style={styles.bulletPoint}>
          • Access Control: Only you can access your encrypted local data
        </Text>

        <Text style={styles.subsectionTitle}>3.2 Cloud Backup (Optional)</Text>
        <Text style={styles.bulletPoint}>• Provider: Supabase (PostgreSQL database)</Text>
        <Text style={styles.bulletPoint}>
          • Encryption: Data is encrypted in transit (TLS) and at rest
        </Text>
        <Text style={styles.bulletPoint}>
          • Row-Level Security: Database policies ensure you can only access your own data
        </Text>
        <Text style={styles.bulletPoint}>
          • Sync: Background sync keeps your data updated across devices
        </Text>

        <Text style={styles.subsectionTitle}>3.3 Security Measures</Text>
        <Text style={styles.bulletPoint}>
          • Passwords are hashed using industry-standard algorithms
        </Text>
        <Text style={styles.bulletPoint}>
          • All network communications use HTTPS/TLS encryption
        </Text>
        <Text style={styles.bulletPoint}>
          • Authentication tokens are securely stored in device keychain
        </Text>
        <Text style={styles.bulletPoint}>• Regular security audits and updates</Text>

        <Text style={styles.sectionTitle}>4. Data Sharing and Third Parties</Text>

        <Text style={styles.emphasizedText}>
          We Do NOT Sell Your Data: We will never sell, rent, or trade your personal information
          to third parties for marketing purposes.
        </Text>

        <Text style={styles.subsectionTitle}>4.1 Third-Party Services</Text>
        <Text style={styles.paragraph}>We use the following third-party services:</Text>
        <Text style={styles.bulletPoint}>
          • Supabase: User authentication and optional cloud backup
        </Text>
        <Text style={styles.bulletPoint}>
          • Claude AI by Anthropic: Generate gift suggestions (anonymized data, zero retention)
        </Text>
        <Text style={styles.bulletPoint}>
          • Apple Services: iOS Speech Framework (on-device), Push Notifications
        </Text>

        <Text style={styles.sectionTitle}>5. Your Privacy Rights and Choices</Text>

        <Text style={styles.bulletPoint}>
          • Access Your Data: View and export all your data within the App
        </Text>
        <Text style={styles.bulletPoint}>
          • Correct or Update Data: Edit any information through the App
        </Text>
        <Text style={styles.bulletPoint}>
          • Delete Your Data: Delete individual items or your entire account
        </Text>
        <Text style={styles.bulletPoint}>
          • Control Cloud Sync: Disable cloud sync and use only local storage
        </Text>
        <Text style={styles.bulletPoint}>
          • Opt-Out of AI Features: Disable AI-powered features in Settings
        </Text>

        <Text style={styles.sectionTitle}>6. Data Retention</Text>
        <Text style={styles.bulletPoint}>
          • Active Accounts: We retain your data as long as your account is active
        </Text>
        <Text style={styles.bulletPoint}>
          • Deleted Accounts: Cloud data is deleted within 30 days of account deletion
        </Text>
        <Text style={styles.bulletPoint}>
          • Local Data: Deleted immediately when you delete the App or your account
        </Text>

        <Text style={styles.sectionTitle}>7. Children's Privacy</Text>
        <Text style={styles.bulletPoint}>• The App is not intended for children under 13</Text>
        <Text style={styles.bulletPoint}>
          • We do not knowingly collect information from children under 13
        </Text>
        <Text style={styles.bulletPoint}>
          • If we discover we have collected data from a child under 13, we will delete it
          immediately
        </Text>

        <Text style={styles.sectionTitle}>8. Your Rights (GDPR & CCPA)</Text>
        <Text style={styles.paragraph}>
          If you are in the EU or California, you have additional rights including:
        </Text>
        <Text style={styles.bulletPoint}>• Right to access your personal data</Text>
        <Text style={styles.bulletPoint}>• Right to correct inaccurate data</Text>
        <Text style={styles.bulletPoint}>• Right to delete your data</Text>
        <Text style={styles.bulletPoint}>• Right to data portability</Text>
        <Text style={styles.bulletPoint}>• Right to non-discrimination</Text>

        <Text style={styles.sectionTitle}>9. Changes to This Privacy Policy</Text>
        <Text style={styles.paragraph}>
          We may update this Privacy Policy from time to time. We will notify you of material
          changes via email or in-app notification. Continued use of the App after changes
          constitutes acceptance of the new policy.
        </Text>

        <Text style={styles.sectionTitle}>10. Contact Us</Text>
        <Text style={styles.paragraph}>
          If you have questions or requests regarding your privacy:
        </Text>
        <Text style={styles.bulletPoint}>Email: privacy@elephrend.com</Text>
        <Text style={styles.bulletPoint}>Response Time: Within 30 days</Text>

        <Text style={styles.commitment}>
          Transparency Commitment: We believe in radical transparency about data practices. We will
          never use your data for purposes not disclosed in this policy, and we will always
          prioritize your privacy over our business interests.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    opacity: 0.6,
    marginBottom: 16,
    fontStyle: 'italic',
  },
  intro: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
    opacity: 0.9,
  },
  principlesBox: {
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  principlesTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 12,
    opacity: 0.9,
  },
  bulletPoint: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 8,
    paddingLeft: 8,
    opacity: 0.9,
  },
  emphasizedText: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
    padding: 12,
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    borderRadius: 8,
    fontWeight: '500',
  },
  commitment: {
    fontSize: 15,
    lineHeight: 22,
    marginTop: 24,
    padding: 16,
    backgroundColor: 'rgba(99, 102, 241, 0.1)',
    borderRadius: 8,
    fontStyle: 'italic',
    opacity: 0.9,
  },
});
