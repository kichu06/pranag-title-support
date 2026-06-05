import type { SectionId } from "@/types/content";

export const COMPANY_NAME = "PRANAG TITLE SUPPORT";
export const COMPANY_TAGLINE =
  "Enterprise-grade title support with scalable delivery, county expertise, and trust-driven service.";

export const COLOR_PALETTE = {
  primary: "#0F4FF5",
  secondary: "#1F2937",
  accent: "#E2E8F0",
  surface: "#F8FAFC",
  border: "#CBD5E1",
  muted: "#64748B",
  text: "#111827",
};

export const SECTION_IDS: Record<SectionId, string> = {
  home: "home",
  about: "about",
  services: "services",
  why: "why",
  coverage: "coverage",
  partners: "partners",
  capacity: "capacity",
  contact: "contact",
};

export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const LAYOUT = {
  maxWidth: "1200px",
  contentPadding: "1.5rem",
  sectionSpacing: "6rem",
};

export const TRANSITION = {
  duration: 0.4,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const FOOTER_COPYRIGHT = `© ${new Date().getFullYear()} ${COMPANY_NAME}. All rights reserved.`;
