// Static content from https://events.minitube-humanart.com, captured 2026-10-05.
// No CMS, database, remote assets, or runtime API calls are needed.
export const assets = {
  headerDecoration: "header-decoration.png",
  logo: "Minitube HumanART Logo_RGB260109.png",
  exhibitor: "ESHRE exhibitor logo 2026-01.png",
  heroPoster: "image 1.jpg",
  heroVideo: "20260604_MTUB-eshre26_landingpage-header.mp4",
  heroCircle: "01_MTUB_Kreis_Element_Turquoise_Blue_02.svg",
  floorPlan: "eshre_2026_conference-map-5.svg",
  highlightDecoration: "01_MTUB_Halbkreis_Fotoelement_Unten_Turquoise blue.svg",
  videoPoster: "minitube_video-poster.png",
  expert: "minitube_humanart_paul_gassner_expert-section.jpg",
  productsLeft: "01_MTUB_Halbkreis_Fotoelement_Rechts_Sky_Blue.svg",
  productsRight: "01_MTUB_Halbkreis_Fotoelement_Sky_Blue.svg",
  contactMap: "distributoren section karte.svg",
  youtube: "YouTube_full-color_icon.svg",
  linkedin: "linkedin-svgrepo-com.svg",
} as const;

export const imagePath = (filename: string) => `/images/${encodeURIComponent(filename)}`;

export const site = {
  headline: "Minitube Human ART at the ESHRE 42nd Annual Meeting",
  subheadline: "London, United Kingdom\nJuly 5–8, 2026",
  meetLabel: "Letʼs meet in person",
  boothHeadline: "Join us at our booth (North Event Halls, N7)",
  boothNumber: "D37",
  boothDescription:
    "As an innovative specialist in reproductive medicine solutions, we look forward to welcoming you at ESHRE 2026. Discover our latest products and solutions for sperm preparation and analysis, and connect with our experts in person.",
  reasonsHeadline: "Good reasons to stop by our booth",
  highlightHeadline: "Elevating Andrology. Improving ART Workflows.",
  highlightDescription:
    "Discover reliable innovations – designed to make critical steps in reproductive medicine safer, more efficient, and easier to perform. With our specialized expertise in andrology and continuous product innovation, we help you optimize workflows, enhance process reliability, and achieve consistent, high-quality results.",
  expertHeadline: "Our expert insights",
  quote:
    "We develop our solutions based on the real world needs of our customers, drawing on insights from both distributors and end users to continuously refine and enhance our products and to create new ideas where they add value.",
  productsHeadline: "Exclusive premiere:\nOur latest products at ESHRE",
  teamHeadline: "Meet our team in person",
  bookingHeadline: "Secure your 1-on-1 expert session",
  bookingDescription: "Book your appointment with our specialists at the booth.",
  contactHeadline: "Just get in touch",
  contactDescription:
    "Want to learn more about our solutions? We support customers worldwide and are happy to hear from you. Feel free to send us a message or give us a call.",
  company: "Minitube Human ART",
  website: "www.minitube-humanart.com",
  email: "info@minitube-humanart.com",
  phone: "+49 8709 9229 100",
};

export const reasons = [
  {
    icon: "demo.svg",
    headline: "Workflow-oriented solutions",
    description:
      "Discover our latest innovations for safe, efficient and user-friendly sperm preparation and analysis workflows.",
  },
  {
    icon: "workflow.svg",
    headline: "Products for optimized laboratory processes",
    description: "Experience live on-site how our latest products simplify your ART processes in andrology.",
  },
  {
    icon: "1on1.svg",
    headline: "Experts 1-on-1",
    description: "Connect with our team to explore how our products and solutions can support your daily work.",
  },
] as const;

export const statistics = [
  { headline: "40+", description: "years of experience" },
  { headline: "45+", description: "countries served" },
  { headline: "German", description: "engineered products" },
] as const;

export const products = [
  {
    headline: "Sperm Analysis: Simplicity Up. Errors Down.",
    image: "eshre_2026_product-revealed_1-1.png",
    alt: "AndroVision med analysis software and the blue MiniQube digital microscope on a blue background.",
    caption:
      "The interplay between the CASA software AndroVision® med and the digital microscope MiniQube provides a highly reproducible and user-friendly solution for semen analysis. The system automatically assesses sperm concentration and motility within seconds.",
    buttonLabel: "Explore more",
  },
  {
    headline: "Sperm Preparation: Fast Processing. Simple Workflow.",
    image: "eshre_2026_product-revealed_2-1.png",
    alt: "Color-coded sFlow sperm selectors and AndroStation laboratory workstations on a blue background.",
    caption:
      "The unique combination of the intelligently designed sFlow sperm selector and the electrically heated AndroStation workstation optimizes sperm yield and handling conditions. For increased chances of treatment success.",
    buttonLabel: "Learn more",
  },
] as const;

export const team = [
  { name: "Paul Gassner", position: "Head of Minitube Human ART", image: "minitube_humanart_paul_gassner-1.jpg" },
  { name: "Julia Füßl", position: "Product Manager Minitube Human ART", image: "minitube_humanart_julia_fuessl-1.jpg" },
  { name: "Michael Penker", position: "Area Sales Manager Minitube", image: "minitube_humanart_michael_penker-1.jpg" },
  { name: "Wolfram Veitl", position: "CCO Minitube", image: "minitube_humanart_wolfram_veitl-1.jpg" },
] as const;

// The source's calendar is empty now that the July event is over.
// Reproduce that visible state without any date-dependent rendering.
export const bookingTimes = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
export const weekdays = ["M", "T", "W", "T", "F", "S", "S"];
