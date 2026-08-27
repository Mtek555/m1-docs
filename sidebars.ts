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
  ],
};

export default sidebars;
