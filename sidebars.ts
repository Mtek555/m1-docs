import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  fieldGuide: [
    {
      type: "category",
      label: "Start here",
      collapsed: false,
      items: [
        "getting-started",
        "charging",
        "features-overview",
        "updating-firmware",
        { type: "link", label: "Open M1 Web Manager", href: "https://control.monstatek.com" },
        "recover-unresponsive-m1",
      ],
    },
    {
      type: "category",
      label: "Device and storage",
      collapsed: false,
      items: ["hardware-specifications", "microsd-card", "usb", "settings"],
    },
    {
      type: "category",
      label: "Radio tools",
      collapsed: false,
      items: ["sub-ghz", "nfc", "rfid", "infrared", "wi-fi", "bluetooth"],
    },
    {
      type: "category",
      label: "Hardware expansion",
      collapsed: false,
      items: ["gpio"],
    },
    {
      type: "category",
      label: "Developers and releases",
      collapsed: true,
      items: ["build-from-source", "whats-new", { type: "link", label: "Legal / Responsible Use", href: "/legal-disclaimer" }],
    },
  ],
};

export default sidebars;
