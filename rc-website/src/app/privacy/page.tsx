import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Robotics Collective Aachen",
  description:
    "Privacy policy and data protection information for Robotics Collective Aachen",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-light text-dark" style={{ paddingTop: "12vh" }}>
      <div style={{ padding: "5vh" }}>
        <div className="max-w-[120vh] mx-auto">
          <h1 className="text-h2 mb-12">Privacy Policy</h1>

          <section className="mb-16">
            <h2 className="text-h5 mb-4">General Information and Mandatory Disclosures</h2>
            <p>
              At Robotics Collective Aachen, protecting your privacy is very
              important to us. This privacy policy transparently explains how we
              collect, use, and protect your personal data in accordance with
              the GDPR and other relevant data protection regulations. The
              entity responsible for data processing on this website is:
            </p>
            <div className="bg-dark text-white p-6 rounded-vh-md my-6">
              <p>
                open robotic metaverse e.V.
                <br />
                Jülicher Str. 209d
                <br />
                52070 Aachen
                <br />
                Germany
              </p>
            </div>

            <h2 className="text-h5 mb-4 mt-12">Data Collection and Usage</h2>
            <p>
              We collect personal data only if you voluntarily provide it to us,
              for example when registering for community meetups or using our
              website. The type of data collected depends on the purpose and may
              include name and contact information, organizational affiliation,
              event-specific details, and feedback. Legal basis: Consent
              (Art. 6 Para. 1 lit. a GDPR), Contract fulfillment (Art. 6 Para. 1
              lit. b GDPR), and legitimate interests (Art. 6 Para. 1 lit. f
              GDPR).
            </p>

            <h2 className="text-h5 mb-4 mt-12">Google Analytics</h2>
            <p>
              We use Google Analytics 4 (GA4) to analyze user behavior on our
              website. IP addresses are anonymized before processing. No
              personally identifiable information is stored. Data processing
              takes place on the basis of your consent (Art. 6 Para. 1 lit. a
              GDPR). You can revoke your consent at any time via our cookie
              settings.
            </p>

            <h2 className="text-h5 mb-4 mt-12">Your Rights</h2>
            <p>You have the following rights regarding your personal data:</p>
            <ul className="list-disc pl-6">
              <li>Right to access (Art. 15 GDPR)</li>
              <li>Right to rectification (Art. 16 GDPR)</li>
              <li>Right to erasure (Art. 17 GDPR)</li>
              <li>Right to restriction of processing (Art. 18 GDPR)</li>
              <li>Right to data portability (Art. 20 GDPR)</li>
              <li>Right to object (Art. 21 GDPR)</li>
            </ul>

            <h2 className="text-h5 mb-4 mt-12">Data Security</h2>
            <p>
              To ensure the security of data transmission, our website uses SSL
              or TLS encryption. This makes data you transmit to us via the site
              unreadable to third parties.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
