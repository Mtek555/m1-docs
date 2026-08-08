import type { ReactNode } from "react";
import Layout from "@theme/Layout";

const disclaimerSections = [
  {
    number: "1",
    title: '"As-Is" Provision and No Warranty',
    body: 'The MonstaTek M1 hardware, firmware, and accompanying documentation are provided on an "AS-IS" and "AS-AVAILABLE" basis. MonstaTek LLC makes no warranties, expressed or implied, regarding the performance, reliability, or suitability of the device for any particular purpose. To the maximum extent permitted by applicable law, MonstaTek LLC disclaims all warranties, including but not limited to implied warranties of merchantability and fitness for a particular purpose.',
  },
  {
    number: "2",
    title: "Open-Source Firmware and Documentation",
    body: "The firmware and hardware documentation for the MonstaTek M1 are provided under open-source licenses via our public repository. Users who choose to download, modify, compile, or flash the source code do so entirely at their own risk. MonstaTek LLC is not responsible for any device failure, data loss, or hardware damage resulting from the installation of custom, modified, or third-party firmware.",
  },
  {
    number: "3",
    title: "Limitation of Liability",
    body: "In no event shall MonstaTek LLC, its directors, employees, partners, or affiliates be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with the use or inability to use the MonstaTek M1. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses, even if MonstaTek LLC has been advised of the possibility of such damages.",
  },
  {
    number: "4",
    title: "User Modifications and Hardware Safety",
    body: "The MonstaTek M1 is designed for developers, engineers, and hardware enthusiasts. Opening the device casing, modifying the internal components, or interfacing with external hardware carries inherent risks, including but not limited to electrical shorts, component failure, or personal injury. Users assume all responsibility for any physical modifications made to the hardware.",
  },
  {
    number: "5",
    title: "Regulatory and Legal Compliance",
    body: "It is the user's sole responsibility to ensure that their use of the MonstaTek M1 complies with all local, state, federal, and international laws and regulations. MonstaTek LLC assumes no liability for the misuse of this device in any illegal, unauthorized, or non-compliant manner.",
  },
];

export default function LegalDisclaimer(): ReactNode {
  return (
    <Layout
      title="Legal Disclaimer"
      description="Legal disclaimer for the MonstaTek M1 hardware, firmware, and documentation."
    >
      <main className="container margin-vert--xl m1-legal-page">
        <header className="m1-legal-header">
          <p className="m1-legal-eyebrow">LEGAL</p>
          <h1>Legal Disclaimer</h1>
        </header>
        <div className="m1-legal-sections">
          {disclaimerSections.map((section) => (
            <section className="m1-legal-section" key={section.number}>
              <div className="m1-legal-number" aria-hidden="true">{section.number}</div>
              <div>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </div>
            </section>
          ))}
        </div>
      </main>
    </Layout>
  );
}
