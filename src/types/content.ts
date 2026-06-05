export type SectionId =
  | "home"
  | "about"
  | "services"
  | "why"
  | "coverage"
  | "partners"
  | "capacity"
  | "contact";

export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface CtaButton {
  label: string;
  href: `#${string}` | string;
  variant: "primary" | "secondary";
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  description: string;
  ctaPrimary: CtaButton;
  ctaSecondary: CtaButton;
  highlights: string[];
}

export interface AboutContent {
  title: string;
  description: string;
  bullets: string[];
}

export interface ServiceCard {
  title: string;
  description: string;
  detail: string;
  icon: string;
  features: string[];
}

export interface ServicesContent {
  title: string;
  description: string;
  cards: ServiceCard[];
}

export interface WhyChooseUsCard {
  title: string;
  description: string;
  badge?: string;
}

export interface WhyChooseUsContent {
  title: string;
  description: string;
  cards: WhyChooseUsCard[];
}

export interface CoverageAreaItem {
  region: string;
  description: string;
  counties?: string[];
}

export interface CoverageAreasContent {
  title: string;
  description: string;
  regions: CoverageAreaItem[];
  note?: string;
}

export interface VendorPartnershipCard {
  title: string;
  description: string;
  highlights: string[];
}

export interface VendorPartnershipsContent {
  title: string;
  description: string;
  cards: VendorPartnershipCard[];
}

export interface MetricCard {
  label: string;
  value: string;
  description: string;
}

export interface TurnaroundContent {
  title: string;
  description: string;
  metrics: MetricCard[];
  ctaText: string;
  ctaUrl: string;
}

export type ContactDetailType =
  | "phone"
  | "email"
  | "address"
  | "support"
  | "hours";

export interface ContactDetail {
  label: string;
  value: string;
  subtext?: string;
  type: ContactDetailType;
}

export interface ContactContent {
  title: string;
  description: string;
  formHeadline: string;
  details: ContactDetail[];
  ctaPrimary: CtaButton;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterContent {
  summary: string;
  serviceLinks: FooterLink[];
  companyLinks: FooterLink[];
  socialLinks: FooterLink[];
  contactEmail: string;
  contactPhone: string;
  copyright: string;
}
