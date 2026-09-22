import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

const categories = [
  { icon: "↗", title: "Start here", text: "Learn about the M1, navigate through menus, and get comfortable with the controls.", href: "/docs/getting-started" },
  { icon: "▦", title: "Device and storage", text: "Hardware, automatic folders, USB Drive, and settings.", href: "/docs/hardware-specifications" },
  { icon: "⌁", title: "Radio tools", text: "Sub-GHz, NFC, RFID, infrared, Wi-Fi, and Bluetooth workflows.", href: "/docs/sub-ghz" },
  { icon: "↻", title: "Recovery", text: "Restore an unresponsive M1 with forced-reboot and SWD recovery procedures.", href: "/docs/recover-unresponsive-m1" },
];

const featureHighlights = [
  { title: "9-item main menu", text: "USB has its own top-level category." },
  { title: "NFC tools", text: "Add profiles, extract keys, and manage dictionaries." },
  { title: "Wi-Fi and MonstaShark", text: "Scan networks, survey channels, run controlled tests, and save PCAPNG captures." },
  { title: "Bluetooth tools", text: "View device details, measure signal strength, explore GATT, and open saved records." },
];

export default function Home(): ReactNode {
  return (
    <Layout title="MonstaTek M1 Field Guide" description="Official MonstaTek M1 user documentation">
      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>OFFICIAL USER DOCUMENTATION</p>
              <Heading as="h1">Master your <span>M1.</span></Heading>
              <p>Learn about the M1, explore its tools, manage files, update firmware, and keep your device working smoothly.</p>
              <div className={styles.actions}>
                <Link className="button button--primary" to="/docs/getting-started">Start with the M1 →</Link>
                <Link className="button button--secondary" href="https://update.monstatek.com">Update firmware ↗</Link>
              </div>
              <small>● Official MonstaTek M1 field guide</small>
            </div>
          </div>
        </section>
        <section className={styles.categories}>
          <div className={styles.heading}><div><p className={styles.eyebrow}>EXPLORE THE M1</p><Heading as="h2">Field guides by category</Heading></div><p>Start with the basics or jump directly to the function you need.</p></div>
          <div className={styles.grid}>
            {categories.map((category) => (
              <Link className={styles.card} to={category.href} key={category.title}>
                <span>{category.icon}</span><Heading as="h3">{category.title}</Heading><p>{category.text}</p><b>→</b>
              </Link>
            ))}
          </div>
          <div className={styles.overview}>
            <div>
              <p className={styles.eyebrow}>EXPLORE MORE</p>
              <Heading as="h2">Get to know the M1</Heading>
              <p>Take a closer look at its menus, tools, and storage layout.</p>
              <Link className="button button--primary" to="/docs/features-overview">Explore all features →</Link>
            </div>
            <div className={styles.featureList}>
              {featureHighlights.map((item) => (
                <div className={styles.featureItem} key={item.title}><strong>{item.title}</strong><span>{item.text}</span></div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
