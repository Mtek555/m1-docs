import type { Config } from "@docusaurus/types";
import type { Options, ThemeConfig } from "@docusaurus/preset-classic";

const config: Config = {
  title: "MonstaTek M1 Field Guide",
  tagline: "Clear, accurate end-user documentation for the MonstaTek M1",
  favicon: "img/monstatek-logo.jpg",
  url: "https://docs.monstatek.com",
  baseUrl: "/",
  organizationName: "Monstatek",
  projectName: "M1",
  onBrokenLinks: "throw",
  markdown: { hooks: { onBrokenMarkdownLinks: "warn" } },
  i18n: { defaultLocale: "en", locales: ["en"] },
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "docs",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: { customCss: "./src/css/custom.css" },
      } satisfies Options,
    ],
  ],
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        indexDocs: true,
        indexPages: true,
        highlightSearchTermsOnTargetPage: true,
        language: ["en"],
      },
    ],
  ],
  themeConfig: {
    image: "img/social-card.svg",
    colorMode: { defaultMode: "light", disableSwitch: false, respectPrefersColorScheme: true },
    navbar: {
      title: "MonstaTek M1 Field Guide",
      logo: { alt: "MonstaTek M1", src: "img/monstatek-logo-transparent.png" },
      items: [
        { to: "/docs/getting-started", label: "Guides", position: "left" },
        { to: "/docs/updating-firmware", label: "Update M1", position: "left" },
        { to: "/docs/hardware-specifications", label: "Specifications", position: "left" },
        { href: "https://control.monstatek.com", label: "Web Manager", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        { title: "Product", items: [
          { label: "MonstaTek", href: "https://www.monstatek.com" },
          { label: "M1 Web Manager", href: "https://control.monstatek.com" },
        ] },
        { title: "Resources", items: [
          { label: "M1 firmware source", href: "https://github.com/Monstatek/M1" },
          { label: "ESP32 Core source", href: "https://github.com/Monstatek/MonstaTek-Esp32-Core" },
          { label: "Firmware releases", href: "https://github.com/Monstatek/M1/releases" },
        ] },
        { title: "Support", items: [
          { label: "support@monstatek.com", href: "mailto:support@monstatek.com" },
          { label: "Legal Disclaimer", to: "/legal-disclaimer" },
        ] },
      ],
      copyright: `© ${new Date().getFullYear()} MonstaTek LLC.`,
    },
  } satisfies ThemeConfig,
};

export default config;
