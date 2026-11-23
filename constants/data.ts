import { icons } from "@/constants/icon";
import {
  X,
  MoreVertical,
  Briefcase,
  HelpCircle,
  ShieldCheck,
  Globe,
  LogOut,
} from "lucide-react-native";

export const tabs: AppTab[] = [
  { name: "index", title: "Home", icon: icons.home },
  { name: "wallet", title: "Wallet", icon: icons.wallet },
  { name: "activity", title: "Activity", icon: icons.activity },
  { name: "account", title: "Account", icon: icons.account },
];

export const HOME_USER = {
  name: "Adrian | JS Mastery",
};

export const HOME_BALANCE = {
  amount: 2489.48,
  nextRenewalDate: "2026-03-18T09:00:00.000Z",
};

export const UPCOMING_SUBSCRIPTIONS: UpcomingSubscription[] = [
  {
    id: "spotify",
    icon: icons.spotify,
    name: "Spotify",
    price: 5.99,
    currency: "USD",
    daysLeft: 2,
  },
  {
    id: "notion",
    icon: icons.notion,
    name: "Notion",
    price: 12.0,
    currency: "USD",
    daysLeft: 4,
  },
  {
    id: "figma",
    icon: icons.figma,
    name: "Figma",
    price: 15.0,
    currency: "USD",
    daysLeft: 6,
  },
];

export const HOME_SUBSCRIPTIONS: Subscription[] = [
  {
    id: "adobe-creative-cloud",
    icon: icons.adobe,
    name: "Adobe Creative Cloud",
    plan: "Teams Plan",
    category: "Design",
    paymentMethod: "Visa ending in 8530",
    status: "active",
    startDate: "2025-03-20T10:00:00.000Z",
    price: 77.49,
    currency: "USD",
    billing: "Monthly",
    renewalDate: "2026-03-20T10:00:00.000Z",
    color: "#f5c542",
  },
  {
    id: "github-pro",
    icon: icons.github,
    name: "GitHub Pro",
    plan: "Developer",
    category: "Developer Tools",
    paymentMethod: "Mastercard ending in 2408",
    status: "active",
    startDate: "2024-11-24T10:00:00.000Z",
    price: 9.99,
    currency: "USD",
    billing: "Monthly",
    renewalDate: "2026-03-24T10:00:00.000Z",
    color: "#e8def8",
  },
  {
    id: "claude-pro",
    icon: icons.claude,
    name: "Claude Pro",
    plan: "Pro Plan",
    category: "AI Tools",
    paymentMethod: "Amex ending in 1010",
    status: "paused",
    startDate: "2025-06-27T10:00:00.000Z",
    price: 20.0,
    currency: "USD",
    billing: "Monthly",
    renewalDate: "2026-03-27T10:00:00.000Z",
    color: "#b8d4e3",
  },
  {
    id: "canva-pro",
    icon: icons.canva,
    name: "Canva Pro",
    plan: "Yearly Access",
    category: "Design",
    paymentMethod: "Visa ending in 7784",
    status: "cancelled",
    startDate: "2024-04-02T10:00:00.000Z",
    price: 119.99,
    currency: "USD",
    billing: "Yearly",
    renewalDate: "2026-04-02T10:00:00.000Z",
    color: "#b8e8d0",
  },
];

// ── Booking Data ───────────────────────────────────────────────────────────
const BOOKINGS = [
  {
    id: "1",
    name: "Sarah Jenkins",
    service: "Express Wash",
    distance: "3.2 miles away",
    status: "Pending Request",
    statusColor: "#3b82f6",
    time: "2m ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    avatarBg: "#e0f2fe",
  },
  {
    id: "2",
    name: "Michael Chen",
    service: "Deluxe Ironing",
    distance: "1.5 miles away",
    status: "Accepted",
    statusColor: "#22c55e",
    time: "15m ago",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    avatarBg: "#dbeafe",
  },
  {
    id: "3",
    name: "Jessica Williams",
    service: "Dry Cleaning",
    distance: "0.8 miles away",
    status: "New Order",
    statusColor: "#3b82f6",
    time: "1h ago",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    avatarBg: "#fef3c7",
  },
];

// ------------- for the single provider navbar profile -------------------------------

const MENU_ITEMS = [
  {
    key: "services",
    label: "Services & Pricing",
    route: "/singleprovider-dashboard/profile/services",
    Icon: Briefcase,
    iconColor: "#2563EB",
  },
  {
    key: "help",
    label: "Help & support",
    route: "/singleprovider-dashboard/profile/Help&Support",
    Icon: HelpCircle,
    iconColor: "#3B82F6",
  },
  {
    key: "privacy",
    label: "Privacy & Security",
    route: "/singleprovider-dashboard/profile/privacy&security",
    Icon: ShieldCheck,
    iconColor: "#10B981",
  },
  {
    key: "language",
    label: "Language",
    route: "/singleprovider-dashboard/profile/Language",
    Icon: Globe,
    iconColor: "#06B6D4",
  },
];
