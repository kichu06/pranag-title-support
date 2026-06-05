import type {
  AboutContent,
  ContactContent,
  CoverageAreasContent,
  CtaButton,
  FooterContent,
  MetricCard,
  NavItem,
  ServiceCard,
  ServicesContent,
  TurnaroundContent,
  VendorPartnershipsContent,
  WhyChooseUsContent,
} from "@/types/content";

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Coverage", href: "#coverage" },
  { label: "Partnerships", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export const heroContent = {
  eyebrow: "Fast, Accurate & Scalable Title Search Support Services",
  headline:
    "Title search support for title agencies, settlement providers, attorneys, and real estate professionals.",
  subheadline:
    "Municipal lien, tax, utility, ancillary, HOA, and overflow search support with county-level review and dependable delivery.",
  description:
    "PRANAG TITLE SUPPORT provides established search support with manual county verification, consistent quality control, and operational reliability.",
  ctaPrimary: { label: "Request Pricing", href: "#contact", variant: "primary" },
  ctaSecondary: { label: "Review Services", href: "#services", variant: "secondary" },
  highlights: [
    "24–48 hour turnaround for core search packages",
    "Manual county review across rural and metro jurisdictions",
    "White-label delivery for title and settlement partners",
  ],
};

export const aboutContent: AboutContent = {
  title: "Dependable search support for title agencies and settlement providers.",
  description:
    "PRANAG TITLE SUPPORT delivers title support services for title agencies, settlement providers, attorneys, and real estate professionals. We help reduce title workflow disruptions with consistent search delivery, county verification, and quality review.",
  bullets: [
    "Manual county and municipal record research across multiple jurisdictions.",
    "Operational capacity to support routine volume and rush overflow engagement.",
    "White-label delivery for vendor-facing search relationships.",
    "Quality control review on every search package before final delivery.",
  ],
};

export const servicesContent: ServicesContent = {
  title: "Reliable title search services for every closing requirement.",
  description:
    "We provide title teams with clear search results, county-specific verification, and coordinated delivery for municipal, tax, utility, ancillary, HOA, and overflow work.",
  cards: [
    {
      title: "Municipal Lien Searches",
      description:
        "Manual research into municipal liens, assessments, and judgments that can affect title clearance.",
      detail:
        "We confirm municipal lien data from county and city records so title teams can identify exceptions and manage resolution.",
      icon: "building-check",
      features: [
        "County and municipal lien record retrieval",
        "Judgment, assessment, and enforcement lien review",
        "Jurisdiction-specific scope and reporting",
      ],
    },
    {
      title: "Tax Searches",
      description:
        "Property tax verification that identifies outstanding balances, installment arrangements, and lien priorities.",
      detail:
        "Our tax work confirms current status with county tax authorities and identifies any conditions that may affect closing or title priority.",
      icon: "currency-dollar",
      features: [
        "Current and prior year tax status verification",
        "Delinquency and installment payment review",
        "Special assessment and lien priority identification",
      ],
    },
    {
      title: "Utility Searches",
      description:
        "Verification of utility accounts and service obligations that can influence title readiness and closing timelines.",
      detail:
        "We check active accounts, unpaid balances, and transfer requirements for water, sewer, electric, gas, and related utility services.",
      icon: "sparkles",
      features: [
        "Local provider account status verification",
        "Identification of unpaid utility obligations",
        "Support for residential and commercial transactions",
      ],
    },
    {
      title: "Ancillary Searches",
      description:
        "Search support for lender endorsements, title exceptions, and additional closing requirements.",
      detail:
        "Ancillary research helps title teams prepare for complex transactions and required endorsement conditions.",
      icon: "shield-check",
      features: [
        "Flood, zoning, and environmental screening",
        "Judgment, bankruptcy, and lien research",
        "Endorsement-ready exception review",
      ],
    },
    {
      title: "HOA Verification",
      description:
        "Association status verification for dues, transfer fees, and HOA-related title requirements.",
      detail:
        "We confirm HOA obligations and document requirements to help title teams close transactions in planned communities.",
      icon: "house-check",
      features: [
        "Assessment and common area fee validation",
        "Transfer fee and resale certificate coordination",
        "HOA compliance reporting for title clearance",
      ],
    },
    {
      title: "Rush / Overflow Support",
      description:
        "Rush and overflow support to help title teams meet deadlines while maintaining review standards.",
      detail:
        "We provide supplemental operational capacity for high-volume periods, last-minute orders, and accelerated turnaround needs.",
      icon: "bolt",
      features: [
        "Expedited search delivery with rapid intake",
        "Supplemental capacity for overflow work",
        "Coordinated status reporting for rush orders",
      ],
    },
  ],
};

export const whyChooseUsContent: WhyChooseUsContent = {
  title: "Why title professionals choose PRANAG TITLE SUPPORT.",
  description:
    "We provide experienced title search support with county-level review, quality control, and operational capacity that supports both routine and complex transactions.",
  cards: [
    {
      title: "Manual County Verification",
      description:
        "Our analysts confirm records directly with county clerks, tax offices, and municipal systems to capture jurisdiction-specific details.",
      badge: "County Verified",
    },
    {
      title: "Dedicated QC Process",
      description:
        "Search packages are reviewed for accuracy and completeness before they are delivered to your team.",
      badge: "Quality Checked",
    },
    {
      title: "Rural Jurisdiction Expertise",
      description:
        "We support searches in smaller counties and remote jurisdictions where local knowledge and manual research are essential.",
      badge: "Rural Coverage",
    },
    {
      title: "Ancillary Search Specialization",
      description:
        "Our team supports lender-required ancillary work, endorsement conditions, and complex exception review.",
      badge: "Ancillary Expertise",
    },
    {
      title: "Scalable Operations",
      description:
        "Our workflows are designed to support recurring volume and overflow needs while maintaining consistent delivery.",
      badge: "Operational Capacity",
    },
    {
      title: "Fast Turnaround",
      description:
        "Core search work is delivered in 24–48 hours, with rush options available for accelerated timelines.",
      badge: "Responsive",
    },
  ],
};

export const coverageAreasContent: CoverageAreasContent = {
  title: "County-level support across Texas, Florida, Arizona, Pennsylvania, and select New York counties.",
  description:
    "We provide title search support with county and municipal verification in our core coverage states, including selected counties in New York.",
  regions: [
    {
      region: "Texas",
      description:
        "County and municipal lien searches, tax verification, utility research, and ancillary support for both major metro and rural Texas jurisdictions.",
    },
    {
      region: "Florida",
      description:
        "County-level tax, lien, utility, and HOA verification services for Florida title transactions across coastal and inland markets.",
    },
    {
      region: "Arizona",
      description:
        "County search delivery for Arizona transactions, including municipal and utility research to support closing readiness.",
    },
    {
      region: "Pennsylvania",
      description:
        "County and municipal search support for Pennsylvania title work, including tax, lien, and ancillary verification.",
    },
    {
      region: "Select Counties in New York",
      description:
        "Targeted coverage for New York counties where local process knowledge and document access are required for title work.",
      counties: ["Queens", "Brooklyn", "Nassau", "Suffolk", "Westchester"],
    },
  ],
  note:
    "Interactive coverage map coming soon. Contact us for county-specific availability, pricing, and support details for your title orders.",
};

export const vendorPartnershipsContent: VendorPartnershipsContent = {
  title: "Vendor partnerships for title agencies and settlement providers.",
  description:
    "We deliver white-label search support, overflow capacity, and coordinated delivery that fit existing vendor workflows.",
  cards: [
    {
      title: "White-Label Fulfillment",
      description:
        "Search results and documentation can be delivered under your brand, maintaining a consistent client-facing experience.",
      highlights: [
        "Branded delivery options",
        "Vendor-ready reporting templates",
        "Secure and confidential handling",
      ],
    },
    {
      title: "Overflow and Capacity Support",
      description:
        "We provide supplemental capacity during periods of elevated volume so title teams can meet deadlines without lowering service standards.",
      highlights: [
        "Flexible capacity for surge demand",
        "Rush and overflow order support",
        "Coordinated delivery and status reporting",
      ],
    },
    {
      title: "Dedicated Research Coordination",
      description:
        "A single point of contact manages orders, status updates, and special instructions for your title search work.",
      highlights: [
        "Order management and tracking",
        "Clear communication on file status",
        "Alignment with vendor processes",
      ],
    },
  ],
};

const turnaroundMetrics: MetricCard[] = [
  {
    label: "Turnaround",
    value: "24–48 hrs",
    description: "Core search packages are delivered within two business days, with rush options available.",
  },
  {
    label: "Capacity",
    value: "Flexible support",
    description: "Operational capacity designed to support recurring volume and overflow requirements.",
  },
  {
    label: "Quality Review",
    value: "Controlled process",
    description: "Each search package is reviewed for accuracy and completeness before delivery.",
  },
  {
    label: "Coverage",
    value: "Multi-state support",
    description: "County search support across our core states with selected New York county coverage.",
  },
];

export const turnaroundContent: TurnaroundContent = {
  title: "Rapid turnaround with dependable capacity.",
  description:
    "Our operational model is calibrated for speed, accuracy, and scalable delivery across core title search categories.",
  metrics: turnaroundMetrics,
  ctaText: "Discuss capacity and timelines",
  ctaUrl: "#contact",
};

export const contactContent: ContactContent = {
  title: "Contact PRANAG TITLE SUPPORT.",
  description:
    "Request pricing, discuss search support needs, or schedule a call to review how we can support your title operations.",
  formHeadline: "Complete the form and our team will follow up promptly to review your title search requirements.",
  details: [
    {
      type: "email",
      label: "Email",
      value: "ryan@pranag.in",
      subtext: "Primary contact for pricing and operational inquiries.",
    },
    {
      type: "phone",
      label: "Phone",
      value: "+91 74830 62159",
      subtext: "Available for title support and vendor coordination.",
    },
    {
      type: "support",
      label: "LinkedIn",
      value: "linkedin.com/in/ryan-ford-5a5a16377",
      subtext: "Connect with our founder for partnership inquiries.",
    },
  ],
  ctaPrimary: { label: "Request Pricing", href: "#contact", variant: "primary" },
};

export const footerContent: FooterContent = {
  summary:
    "Supporting title agencies, settlement providers, attorneys, and real estate professionals with reliable title search support, county verification, and quality-controlled delivery.",

  serviceLinks: [
    { label: "Municipal Lien Searches", href: "#services" },
    { label: "Tax Searches", href: "#services" },
    { label: "Utility Searches", href: "#services" },
    { label: "Ancillary Searches", href: "#services" },
    { label: "HOA Verification", href: "#services" },
    { label: "Rush / Overflow Support", href: "#services" },
  ],

  companyLinks: [
    { label: "About", href: "#about" },
    { label: "Coverage", href: "#coverage" },
    { label: "Partnerships", href: "#partners" },
    { label: "Contact", href: "#contact" },
  ],

  socialLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ryan-ford-5a5a16377",
    },
  ],

  contactEmail: "ryan@pranag.in",
  contactPhone: "+91 74830 62159",

  copyright: `© ${new Date().getFullYear()} PRANAG TITLE SUPPORT. All rights reserved.`,
};
