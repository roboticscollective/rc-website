import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imprint | Robotics Collective Aachen",
  description: "Legal notice and imprint information for Robotics Collective Aachen",
};

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-light text-dark" style={{ paddingTop: "12vh" }}>
      <div style={{ padding: "5vh" }}>
        <div className="max-w-[120vh] mx-auto">
          <h1 className="text-h2 mb-12">Imprint / Legal Notice</h1>

          <section>
            <h2 className="text-h5 mb-4 mt-12">
              Information in Accordance with Section §5 TMG
            </h2>
            <div className="bg-dark text-white p-6 rounded-vh-md mb-8">
              <p>
                open robotic metaverse e.V.
                <br />
                Jülicher Str. 209q-s
                <br />
                52070 Aachen
                <br />
                Germany
              </p>
            </div>

            <h3 className="text-card-title mb-3 mt-8">Registration Information</h3>
            <p>
              <strong>Registergericht:</strong> Amtsgericht Aachen
              <br />
              <strong>Registernummer:</strong> VR6426
            </p>

            <h3 className="text-card-title mb-3 mt-8">Represented By</h3>
            <ul className="list-disc pl-6">
              <li>Amine Kharrat</li>
              <li>Karim Siala</li>
              <li>Jan Strehl</li>
            </ul>

            <h3 className="text-card-title mb-3 mt-8">Contact</h3>
            <p>
              <strong>E-Mail:</strong>{" "}
              <a
                href="mailto:info@roboticscollective.org"
                className="underline hover:no-underline"
              >
                info@roboticscollective.org
              </a>
              <br />
              <strong>Web:</strong>{" "}
              <a
                href="https://www.roboticscollective.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
              >
                www.roboticscollective.org
              </a>
            </p>
          </section>

          <section className="mt-16">
            <h2 className="text-h5 mb-4">Disclaimer</h2>

            <h3 className="text-card-title mb-3 mt-8">Accountability for Content</h3>
            <p>
              The contents of our pages have been created with the utmost care.
              However, we cannot guarantee the contents' accuracy, completeness
              or topicality. According to statutory provisions, we are
              furthermore responsible for our own content on these web pages. In
              this context, please note that we are accordingly not obliged to
              monitor merely the transmitted or saved information of third
              parties, or investigate circumstances pointing to illegal
              activity. Our obligations to remove or block the use of
              information under generally applicable laws remain unaffected by
              this as per §§ 8 to 10 of the Telemedia Act (TMG).
            </p>

            <h3 className="text-card-title mb-3 mt-8">Accountability for Links</h3>
            <p>
              Responsibility for the content of external links (to web pages of
              third parties) lies solely with the operators of the linked pages.
              No violations were evident to us at the time of linking. Should
              any legal infringement become known to us, we will remove the
              respective link immediately.
            </p>

            <h3 className="text-card-title mb-3 mt-8">Copyright</h3>
            <p>
              Our web pages and their contents are subject to German copyright
              law. Unless expressly permitted by law (§ 44a et seq. of the
              copyright law), every form of utilizing, reproducing or processing
              works subject to copyright protection on our web pages requires
              the prior consent of the respective owner of the rights.
              Individual reproductions of a work are allowed only for private
              use, so must not serve either directly or indirectly for earnings.
              Unauthorized utilization of copyrighted works is punishable (§ 106
              of the copyright law).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
