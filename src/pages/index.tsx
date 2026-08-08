import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

const categories = [
  { icon: "↗", title: "Start here", text: "Power on, learn the controls, understand the feature set, and update safely.", href: "/docs/getting-started" },
  { icon: "▦", title: "Device and storage", text: "Hardware specifications, removable storage, USB behavior, and settings.", href: "/docs/hardware-specifications" },
  { icon: "⌁", title: "Radio tools", text: "Sub-GHz, NFC, RFID, infrared, Wi-Fi, and Bluetooth workflows.", href: "/docs/sub-ghz" },
  { icon: "⌘", title: "Hardware expansion", text: "GPIO headers, logic behavior, external rails, and electrical safety.", href: "/docs/gpio" },
];

export default function Home(): ReactNode {
  return (
    <Layout title="MonstaTek M1 Field Guide" description="Official MonstaTek M1 user documentation">
      <main>
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}>OFFICIAL USER DOCUMENTATION</p>
              <Heading as="h1">Master your <span>MonstaTek M1</span></Heading>
              <p>Field guides for setup, radio tools, storage, hardware expansion, and device maintenance.</p>
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
        </section>
      </main>
    </Layout>
  );
}
