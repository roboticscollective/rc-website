import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Robotics Collective",
  description:
    "Privacy policy and data protection information for Robotics Collective",
  keywords: [
    "privacy policy",
    "data protection",
    "GDPR",
    "privacy",
    "data security",
  ],
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            <span className="text-primary">Privacy</span> Policy
          </h1>

          <div className="max-w-4xl mx-auto prose prose-invert prose-headings:text-white prose-headings:font-semibold prose-p:text-gray-300">
            {/* English Version */}
            <section className="mb-16">
              <h2>General Information and Mandatory Disclosures</h2>
              <p>
                At Robotics Collective e.V., protecting your privacy is very
                important to us. This privacy policy transparently explains how
                we collect, use, and protect your personal data in accordance
                with the GDPR and other relevant data protection regulations.
                The entity responsible for data processing on this website is:
              </p>
              <p className="bg-card/50 p-4 rounded-lg">
                {/* <strong>Robotics Collective e.V.</strong> */}
                open robotic metaverse e.V.
                <br />
                Jülicher Str. 209d
                <br />
                52070 Aachen
                <br />
                Germany
              </p>
              <p>
                The responsible entity decides alone or jointly with others on
                the purposes and means of processing personal data (e.g., names,
                contact details, etc.).
              </p>

              <h2 className="mt-12">Data Collection and Usage</h2>
              <p>
                We collect personal data only if you voluntarily provide it to
                us, for example when registering for community meetups or using
                our website. The type of data collected depends on the purpose
                and may include:
              </p>
              <ul>
                <li>Name and contact information</li>
                <li>Organizational affiliation</li>
                <li>Event-specific details</li>
                <li>Feedback and preferences</li>
              </ul>
              <p>This data is used for:</p>
              <ul>
                <li>Planning and organizing events</li>
                <li>Communication with participants</li>
                <li>Improving our services</li>
              </ul>
              <p>
                Legal basis for processing: Consent (Art. 6 Para. 1 lit. a
                GDPR), Contract fulfillment (Art. 6 Para. 1 lit. b GDPR), and
                legitimate interests (Art. 6 Para. 1 lit. f GDPR).
              </p>
              <p>
                Data retention: We store your data only as long as necessary for
                the stated purposes or as required by statutory retention
                periods.
              </p>

              <h2 className="mt-12">Google Analytics and Website Analytics</h2>
              <p>
                We use Google Analytics 4 (GA4) to analyze user behavior on our website
                and understand how visitors interact with our content. This helps us
                improve our website and provide better services to our community.
              </p>
              <p>
                <strong>Data collected:</strong>
              </p>
              <ul>
                <li>Page views and navigation patterns</li>
                <li>Time spent on pages and sections</li>
                <li>Device and browser information (anonymized)</li>
                <li>General geographic location (country/city level)</li>
                <li>Interaction with buttons, forms, and links</li>
                <li>Scroll depth and content engagement</li>
              </ul>
              <p>
                <strong>Privacy safeguards:</strong>
              </p>
              <ul>
                <li>IP addresses are anonymized before processing</li>
                <li>No personally identifiable information is stored</li>
                <li>Google signals and remarketing are disabled</li>
                <li>Data is only collected with your explicit consent</li>
                <li>You can withdraw consent at any time via our cookie settings</li>
              </ul>
              <p>
                Data processing takes place on the basis of your consent (Art. 6 Para. 1 lit. a
                GDPR). You can revoke your consent at any time with effect for
                the future by clicking the cookie settings in our consent banner or
                by contacting us directly. Analytics data is retained for 26 months
                as per Google's default settings.
              </p>
              <p>
                For more information about Google Analytics and privacy, visit:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="text-primary hover:text-primary/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Privacy Policy
                </a>
              </p>

              <h2 className="mt-12">Cloudinary</h2>
              <p>
                We use Cloudinary as a Content Delivery Network (CDN) to
                properly provide the content of our website. Cloudinary is a
                service of Cloudinary, Ltd. When you access content, you
                establish a connection to Cloudinary servers, transmitting your
                IP address and possibly browser data such as your user agent.
                This data is processed exclusively for the above-mentioned
                purposes and to maintain the security and functionality of the
                Cloudinary CDN.
              </p>
              <p>
                The use of the CDN takes place on the basis of our legitimate
                interests, i.e., interest in a secure and efficient provision
                and optimization of our online offerings in accordance with Art.
                6 Para. 1 lit. f. GDPR.
              </p>
              <p>
                We intend to transfer personal data to third countries outside
                the European Economic Area, particularly the USA. In cases where
                there is no adequacy decision by the European Commission (e.g.,
                in the USA), we have agreed to other appropriate safeguards
                within the meaning of Art. 44 ff. GDPR with the recipients of
                the data.
              </p>
              <p>
                The specific storage duration of the processed data is not
                controllable by us but is determined by Cloudinary, Ltd. For
                more information, please see the Cloudinary Privacy Policy:
                <a
                  href="https://cloudinary.com/privacy"
                  className="text-primary hover:text-primary/80"
                >
                  https://cloudinary.com/privacy
                </a>
                .
              </p>

              <h2 className="mt-12">Your Rights</h2>
              <p>You have the following rights regarding your personal data:</p>
              <ul>
                <li>Right to access (Art. 15 GDPR)</li>
                <li>Right to rectification (Art. 16 GDPR)</li>
                <li>Right to erasure (Art. 17 GDPR)</li>
                <li>Right to restriction of processing (Art. 18 GDPR)</li>
                <li>Right to data portability (Art. 20 GDPR)</li>
                <li>Right to object (Art. 21 GDPR)</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the contact
                details provided above.
              </p>

              <h2 className="mt-12">Complaints to Supervisory Authority</h2>
              <p>
                You have the right to lodge a complaint with a competent data
                protection supervisory authority if you believe that the
                processing of your personal data violates data protection
                regulations.
              </p>

              <h2 className="mt-12">Data Security</h2>
              <p>
                To ensure the security of data transmission, our website uses
                SSL or TLS encryption. This makes data you transmit to us via
                the site unreadable to third parties.
              </p>
            </section>

            {/* German Version */}
            <section className="pt-12 border-t border-gray-700">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                <span className="text-primary">Deutsche</span> Version
              </h2>

              <h3>Allgemeiner Hinweis und Pflichtinformationen</h3>
              <p>
                Der Schutz Ihrer Privatsphäre ist uns bei Robotics Collective
                e.V. sehr wichtig. Diese Datenschutzerklärung soll transparent
                erläutern, wie wir Ihre personenbezogenen Daten gemäß der DSGVO
                und anderen relevanten Datenschutzbestimmungen erheben,
                verwenden und schützen. Die verantwortliche Stelle für die
                Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="bg-card/50 p-4 rounded-lg">
                Robotics Collective e.V.
                <br />
                Jülicher Str. 209q-s
                <br />
                52070 Aachen
                <br />
                Deutschland
              </p>
              <p>
                Die verantwortliche Stelle entscheidet allein oder gemeinsam mit
                anderen über die Zwecke und Mittel der Verarbeitung von
                personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).
              </p>

              <h3 className="mt-8">Datenerhebung und -nutzung</h3>
              <p>
                Wir erheben personenbezogene Daten nur, wenn Sie uns diese
                freiwillig zur Verfügung stellen, beispielsweise bei der
                Anmeldung zu Community-Meetups oder der Nutzung unserer Website.
                Die Art der erhobenen Daten hängt vom jeweiligen Zweck ab und
                kann Folgendes umfassen:
              </p>
              <ul>
                <li>Name und Kontaktinformationen</li>
                <li>Organisationszugehörigkeit</li>
                <li>Veranstaltungsspezifische Details</li>
                <li>Feedback und Präferenzen</li>
              </ul>
              <p>Diese Daten werden verwendet für:</p>
              <ul>
                <li>Planung und Organisation von Veranstaltungen</li>
                <li>Kommunikation mit Teilnehmern</li>
                <li>Verbesserung unserer Angebote</li>
              </ul>
              <p>
                Rechtsgrundlage für die Verarbeitung: Einwilligung (Art. 6 Abs.
                1 lit. a DSGVO), Vertragserfüllung (Art. 6 Abs. 1 lit. b DSGVO)
                und berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
              <p>
                Datenaufbewahrung: Wir speichern Ihre Daten nur so lange, wie es
                für die genannten Zwecke erforderlich ist oder gesetzliche
                Aufbewahrungsfristen dies vorschreiben.
              </p>

              <h3 className="mt-8">Google Analytics und Website-Analyse</h3>
              <p>
                Wir nutzen Google Analytics 4 (GA4), um das Nutzerverhalten auf unserer
                Website zu analysieren und zu verstehen, wie Besucher mit unseren Inhalten
                interagieren. Dies hilft uns, unsere Website zu verbessern und bessere
                Dienstleistungen für unsere Community anzubieten.
              </p>
              <p>
                <strong>Erhobene Daten:</strong>
              </p>
              <ul>
                <li>Seitenaufrufe und Navigationsmuster</li>
                <li>Verweildauer auf Seiten und Bereichen</li>
                <li>Geräte- und Browserinformationen (anonymisiert)</li>
                <li>Allgemeine geografische Lage (Land-/Stadtebene)</li>
                <li>Interaktionen mit Buttons, Formularen und Links</li>
                <li>Scroll-Tiefe und Content-Engagement</li>
              </ul>
              <p>
                <strong>Datenschutzmaßnahmen:</strong>
              </p>
              <ul>
                <li>IP-Adressen werden vor der Verarbeitung anonymisiert</li>
                <li>Keine personenbezogenen Informationen werden gespeichert</li>
                <li>Google-Signale und Remarketing sind deaktiviert</li>
                <li>Daten werden nur mit Ihrer ausdrücklichen Zustimmung erfasst</li>
                <li>Sie können die Zustimmung jederzeit über unsere Cookie-Einstellungen widerrufen</li>
              </ul>
              <p>
                Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
                DSGVO). Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft
                widerrufen, indem Sie die Cookie-Einstellungen in unserem Zustimmungsbanner
                anklicken oder uns direkt kontaktieren. Analytics-Daten werden gemäß
                Google-Standardeinstellungen 26 Monate lang aufbewahrt.
              </p>
              <p>
                Weitere Informationen zu Google Analytics und Datenschutz finden Sie unter:{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="text-primary hover:text-primary/80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Datenschutzerklärung
                </a>
              </p>

              <h3 className="mt-8">Cloudinary</h3>
              <p>
                Wir verwenden Cloudinary als Content Delivery Network (CDN), um
                die Inhalte unserer Website ordnungsgemäß bereitzustellen.
                Cloudinary ist ein Dienst der Cloudinary, Ltd. Wenn Sie auf
                Inhalte zugreifen, stellen Sie eine Verbindung zu Servern von
                Cloudinary her, wobei Ihre IP-Adresse und ggf. Browserdaten wie
                Ihr User-Agent übermittelt werden. Diese Daten werden
                ausschließlich zu den oben genannten Zwecken und zur
                Aufrechterhaltung der Sicherheit und Funktionalität des
                Cloudinary CDN verarbeitet.
              </p>
              <p>
                Die Nutzung des CDN erfolgt auf Grundlage unserer berechtigten
                Interessen, d.h. Interesse an einer sicheren und effizienten
                Bereitstellung sowie der Optimierung unseres Onlineangebotes
                gemäß Art. 6 Abs. 1 lit. f. DSGVO.
              </p>
              <p>
                Wir beabsichtigen, personenbezogene Daten an Drittländer
                außerhalb des Europäischen Wirtschaftsraums, insbesondere die
                USA, zu übermitteln. In Fällen, in denen kein
                Angemessenheitsbeschluss der Europäischen Kommission existiert
                (z.B. in den USA), haben wir mit den Empfängern der Daten
                anderweitige geeignete Garantien im Sinne der Art. 44 ff. DSGVO
                vereinbart.
              </p>
              <p>
                Die konkrete Speicherdauer der verarbeiteten Daten ist nicht
                durch uns beeinflussbar, sondern wird von Cloudinary, Ltd.
                bestimmt. Weitere Hinweise finden Sie in der
                Datenschutzerklärung für Cloudinary:
                <a
                  href="https://cloudinary.com/privacy"
                  className="text-primary hover:text-primary/80"
                >
                  https://cloudinary.com/privacy
                </a>
                .
              </p>

              <h3 className="mt-8">Ihre Rechte</h3>
              <p>
                Sie haben folgende Rechte bezüglich Ihrer personenbezogenen
                Daten:
              </p>
              <ul>
                <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
                <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
                <li>Recht auf Löschung (Art. 17 DSGVO)</li>
                <li>
                  Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)
                </li>
                <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
              </ul>
              <p>
                Um diese Rechte auszuüben, kontaktieren Sie uns bitte unter den
                oben genannten Kontaktdaten.
              </p>

              <h3 className="mt-8">Beschwerden bei Aufsichtsbehörden</h3>
              <p>
                Sie haben das Recht, sich bei einer zuständigen
                Datenschutz-Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht
                sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen
                Datenschutzvorschriften verstößt.
              </p>

              <h3 className="mt-8">Datensicherheit</h3>
              <p>
                Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen,
                verwenden wir dem aktuellen Stand der Technik entsprechende
                Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
