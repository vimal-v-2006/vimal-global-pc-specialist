import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bot,
  Cpu,
  Gamepad2,
  Globe2,
  HardDrive,
  MessageSquareText,
  Rocket,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

export type ServiceKey =
  | "optimization"
  | "error-fixing"
  | "software-installation"
  | "ai-setup"
  | "driver-tuning"
  | "remote-troubleshooting"
  | "creative-tools"
  | "gaming-support"
  | "custom-request";

export type ServiceItem = {
  key: ServiceKey;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  cta: string;
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/request-support", label: "Request Support" },
  { href: "/ai-installation", label: "AI Installation" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About Vimal" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const serviceHighlights: ServiceItem[] = [
  {
    key: "optimization",
    title: "PC Optimization",
    short: "From slow potato to suspiciously fast.",
    description:
      "Startup cleanup, background process control, storage sanity, and performance tuning for machines that forgot how to behave.",
    icon: Rocket,
    bullets: ["Startup cleanup", "Storage cleanup guidance", "Gaming optimization"],
    cta: "Boost This Machine",
  },
  {
    key: "error-fixing",
    title: "Error Fixing",
    short: "Windows tantrums, handled.",
    description:
      "Crashes, update chaos, weird popups, broken installs, and all the little disasters that steal your peace.",
    icon: Wrench,
    bullets: ["App crashes", "Windows issues", "Update failures"],
    cta: "Fix the Drama",
  },
  {
    key: "software-installation",
    title: "Software Installation",
    short: "You name the legal app, I install the thing.",
    description:
      "Browsers, media apps, productivity tools, dev stacks, creative suites, and user-owned licensed software.",
    icon: HardDrive,
    bullets: ["Productivity tools", "Creative software", "Developer essentials"],
    cta: "Install My Stack",
  },
  {
    key: "ai-setup",
    title: "AI Setup",
    short: "Wake up the machine.",
    description:
      "Ollama, ComfyUI, OpenWebUI, Pinokio, local inference stacks, voice tools, and hardware suitability checks.",
    icon: Bot,
    bullets: ["Local models", "ComfyUI flows", "Voice and TTS tools"],
    cta: "Make It Smarter",
  },
  {
    key: "driver-tuning",
    title: "Driver & Performance Tuning",
    short: "Drivers broken? Criminal behavior.",
    description:
      "GPU drivers, chipset updates, network tuning, graphics settings, and performance sanity for work and play.",
    icon: Cpu,
    bullets: ["Driver updates", "Performance tuning", "Network cleanup"],
    cta: "Tune the Beast",
  },
  {
    key: "remote-troubleshooting",
    title: "Remote Troubleshooting",
    short: "PC acting possessed? I’ll investigate.",
    description:
      "Remote diagnosis and practical fixes using AnyDesk, Chrome Remote Desktop, TeamViewer, or your preferred tool.",
    icon: Globe2,
    bullets: ["Remote diagnosis", "Safe workflows", "Clear next steps"],
    cta: "Rescue This PC",
  },
  {
    key: "creative-tools",
    title: "Creative Tools Setup",
    short: "Your editor deserves less suffering.",
    description:
      "Blender, DaVinci Resolve, Krita, GIMP, Audacity, and other legal creative tools configured without the headache.",
    icon: Sparkles,
    bullets: ["Blender", "DaVinci Resolve", "Audio and design tools"],
    cta: "Set Up My Creative Rig",
  },
  {
    key: "gaming-support",
    title: "Gaming Setup Support",
    short: "Laggy mess to clean beast.",
    description:
      "Launchers, controller setup, graphics tuning, legal mod support, and performance cleanup for smoother sessions.",
    icon: Gamepad2,
    bullets: ["Launcher installs", "Controller setup", "Legal mod support"],
    cta: "Game Better",
  },
];

export const funnyProblems = [
  "Slow boot? Gross. 🐌",
  "Random errors? Rude. 😑",
  "Drivers broken? Criminal behavior. 🚔",
  "PC acting possessed? I’ll investigate. 👀",
  "Need AI tools installed? Let’s wake up the machine. 🤖",
  "Fan screaming like it pays rent? We should talk. 🌪️",
];

export const howItWorks = [
  "Enter name, phone, email, and contact app 📱",
  "Optional specs if you want to share them 💻",
  "Skip straight to custom request if you want ✍️",
  "Pay $1 worldwide or ₹50 in India 💸",
  "Share remote details later on WhatsApp or Telegram 💬",
  "Vimal reviews and helps ⚡",
];

export const testimonials = [
  {
    name: "Aisha R.",
    country: "UAE",
    quote:
      "My laptop went from opening Chrome like a tragic art film to actually feeling premium. 10/10 remote wizardry.",
  },
  {
    name: "Daniel M.",
    country: "Canada",
    quote:
      "I asked for AI setup, Ollama, and cleanup. I got a faster PC and fewer trust issues. Respect.",
  },
  {
    name: "Nadia K.",
    country: "Germany",
    quote:
      "The site is funny. The support is serious. My drivers finally stopped fighting each other.",
  },
  {
    name: "Rafael T.",
    country: "Brazil",
    quote:
      "ComfyUI, OpenWebUI, GPU tuning, even remote setup notes. Super smooth and weirdly enjoyable.",
  },
];

export const pricingPlans = [
  {
    title: "Worldwide Task",
    price: "$1",
    description: "For foreign clients who want one simple low-friction booking price. 🌍",
    features: ["Simple booking ✨", "Custom request review 🛠️", "Remote follow-up on chat 💬"],
    cta: "Pay $1",
    popular: true,
  },
  {
    title: "India Task",
    price: "₹50",
    description: "For clients in India who want the same easy booking flow. 🇮🇳",
    features: ["Simple booking ✨", "Custom request review 🛠️", "Chat-based follow-up 💬"],
    cta: "Pay ₹50",
    popular: false,
  },
  {
    title: "Pay Later",
    price: "Later",
    description: "Send the task first, then settle the payment after the request is reviewed. 😌",
    features: ["Fast request submit ⚡", "Less pressure, more clarity 🧠", "Payment later option 💸"],
    cta: "Choose Pay Later",
    popular: false,
  },
];

export const faqItems = [
  {
    question: "Do you install cracked or illegal software?",
    answer:
      "Absolutely not. I only install software the client owns, is licensed to use, or is legally available. No piracy, no cracked apps, no shady nonsense.",
  },
  {
    question: "Can you help worldwide?",
    answer:
      "Yes. The service is designed for worldwide remote support, scheduling based on availability and timezone overlap.",
  },
  {
    question: "What if my PC is ancient?",
    answer:
      "That is information, not a deal-breaker. I’ll assess what’s realistic, what’s worth doing, and what would just be emotional damage.",
  },
  {
    question: "Do I need to back up my files?",
    answer:
      "Yes. Always. Remote support is careful, but important files deserve backup energy before any session starts.",
  },
  {
    question: "Which remote tools do you support?",
    answer:
      "AnyDesk, Chrome Remote Desktop, TeamViewer, or details shared later if you prefer to choose after booking.",
  },
];

export const aiTools = [
  "Ollama",
  "ComfyUI",
  "OpenWebUI",
  "Pinokio",
  "Stable Diffusion tools",
  "TTS tools",
  "Voice AI tools",
  "Custom AI stack",
];

export const essentialApps = [
  "Browser",
  "Office alternatives",
  "Media player",
  "Compression tools",
  "Utility apps",
  "Developer tools",
];

export const creativeApps = [
  "Blender",
  "DaVinci Resolve",
  "GIMP",
  "Krita",
  "Audacity",
  "Other legal/professional apps",
];

export const gamingApps = [
  "Steam",
  "Epic Games",
  "Battle.net",
  "Ubisoft Connect",
  "Controller tools",
  "Performance tuning",
];

export const remoteMethods = [
  "AnyDesk",
  "Chrome Remote Desktop",
  "TeamViewer",
  "I will share later",
];

export const sampleRequests = [
  {
    id: "VGPS-24014",
    name: "Liam Brooks",
    country: "United Kingdom",
    contact: "liam@example.com",
    services: ["AI Tool Setup", "PC Optimization"],
    pcSpecs: "RTX 4070, Ryzen 7, 32GB RAM, Windows 11",
    remoteTool: "AnyDesk",
    submittedDate: "2026-04-13 18:20 UTC",
    paymentStatus: "Paid",
    requestStatus: "In Progress",
    notes: "Needs Ollama + OpenWebUI with gaming-safe optimization.",
  },
  {
    id: "VGPS-24013",
    name: "Mika Tan",
    country: "Singapore",
    contact: "mika@example.com",
    services: ["Error Fixing"],
    pcSpecs: "Intel i7, Intel Arc, 16GB RAM, Windows 11",
    remoteTool: "Chrome Remote Desktop",
    submittedDate: "2026-04-13 09:05 UTC",
    paymentStatus: "Pending",
    requestStatus: "Contacted",
    notes: "App crashes after recent Windows update.",
  },
  {
    id: "VGPS-24012",
    name: "Sophia Alvarez",
    country: "Mexico",
    contact: "sophia@example.com",
    services: ["Creative Tools Setup", "Software Installation"],
    pcSpecs: "RTX 3060, Ryzen 5, 32GB RAM, Windows 10",
    remoteTool: "TeamViewer",
    submittedDate: "2026-04-12 21:10 UTC",
    paymentStatus: "Paid",
    requestStatus: "Pending",
    notes: "Needs Blender, Krita, Audacity, plus cleanup.",
  },
  {
    id: "VGPS-24011",
    name: "Noah Patel",
    country: "India",
    contact: "noah@example.com",
    services: ["Gaming Setup", "Driver Update Help"],
    pcSpecs: "RX 7800 XT, Ryzen 9, 32GB RAM, Windows 11",
    remoteTool: "AnyDesk",
    submittedDate: "2026-04-12 16:45 UTC",
    paymentStatus: "Paid",
    requestStatus: "Completed",
    notes: "Steam, controller tools, frame pacing cleanup.",
  },
];

export const statusOptions = [
  "Pending",
  "Contacted",
  "In Progress",
  "Completed",
  "Rejected",
] as const;

export const dashboardStats = [
  {
    label: "Requests this week",
    value: "48",
    helper: "+12% from last week",
    icon: MessageSquareText,
  },
  {
    label: "Countries served",
    value: "19",
    helper: "Global chaos, handled",
    icon: Globe2,
  },
  {
    label: "Average response",
    value: "2.1h",
    helper: "Fast, not feral",
    icon: Activity,
  },
  {
    label: "Success rate",
    value: "96%",
    helper: "Because we like outcomes",
    icon: ShieldCheck,
  },
];

export const aboutHighlights = [
  "Optimization enthusiast with a zero-patience policy for nonsense lag.",
  "Remote support helper who translates scary tech into normal human words.",
  "AI tool installer who actually checks hardware before promising miracles.",
  "Tech problem solver for global clients who need serious help without boring energy.",
];

export const footerBlurb =
  "Vimal Global PC Specialist, remote PC rescue, AI setup, and legal software help with a much simpler booking flow and less form pain.";

export const legalNotice =
  "I only install software that the client owns, is licensed to use, or is legally available.";

export const heroBadges = [
  "Worldwide remote support",
  "AI setup + optimization",
  "Funny website, serious fixes",
];

export const trustPoints = [
  "Simple booking flow",
  "Remote-first support",
  "No piracy, no shady installs",
  "Built for normal humans too",
];

export const contactMethods = [
  {
    title: "Email",
    value: "vimallhmm1874@gmail.com",
    hint: "For quotes, details, and machine drama.",
    icon: MessageSquareText,
  },
  {
    title: "WhatsApp / Telegram",
    value: "Share in request form",
    hint: "Best for scheduling and fast follow-ups.",
    icon: Zap,
  },
  {
    title: "Remote Sessions",
    value: "AnyDesk / CRD / TeamViewer",
    hint: "You pick the remote door. I’ll use the handle.",
    icon: Globe2,
  },
];
