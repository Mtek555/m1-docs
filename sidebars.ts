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
        "hardware-specifications",
        "features-overview",
        "updating-firmware",
        { type: "link", label: "Web Manager", href: "https://control.monstatek.com" },
        { type: "link", label: "Current versions", href: "/docs/updating-firmware#versions" },
      ],
    },
    {
      type: "category",
      label: "Features",
      collapsed: false,
      items: [
        "nfc",
        "rfid",
        "sub-ghz",
        "infrared",
        "wi-fi",
        "bluetooth",
        {
          type: "category",
          label: "USB, SD, and saved files",
          collapsed: true,
          items: ["usb", "microsd-card"],
        },
        "gpio",
        "settings",
      ],
    },
    {
      type: "category",
      label: "Developers",
      collapsed: true,
      items: [
        "build-from-source",
        { type: "link", label: "M1 Firmware Source", href: "https://github.com/Monstatek/M1" },
        { type: "link", label: "ESP32 Core Source", href: "https://github.com/Monstatek/MonstaTek-Esp32-Core" },
        "whats-new",
      ],
    },
    {
      type: "category",
      label: "Support",
      collapsed: true,
      items: [
        "recover-unresponsive-m1",
        { type: "link", label: "Troubleshooting", href: "/docs/getting-started#screen-language" },
        { type: "link", label: "Legal / Responsible Use", href: "/legal-disclaimer" },
      ],
    },
  ],
};

export default sidebars;
