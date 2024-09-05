import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";

export const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 19,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB of storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign Up Now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB of storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign Up Now",
    popular: false,
    inverse: false,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "200GB of storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export type pricingTierType = {
  title: string;
  monthlyPrice: number;
  buttonText: string;
  popular: boolean;
  inverse: boolean;
  features: string[];
};

export const testimonials = [
  {
    avatarSrc: avatar1.src,
    name: "Alex Rivera",
    username: "jamietechguru00",
    comment:
      "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
  },
  {
    avatarSrc: avatar2.src,
    name: "Casey Jordan",
    username: "caseyj",
    comment:
      "I was amazed at how quickly we were able to integrate this app into our workflow.",
  },
  {
    avatarSrc: avatar3.src,
    name: "Jordan Patels",
    username: "jpatelsdesign",
    comment:
      "Adopting this app for our team has streamlined our project management and improved communication across the board. ",
  },
  {
    avatarSrc: avatar4.src,
    name: "Josh Smith",
    username: "jjsmith",
    comment:
      "Our team’s productivity has skyrocketed since we started using this tool. ",
  },
  {
    avatarSrc: avatar5.src,
    name: "Taylor Kim",
    username: "taylorkimm",
    comment:
      "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
  },
  {
    avatarSrc: avatar6.src,
    name: "Sam Dawson",
    username: "dawsontechtips",
    comment:
      "With this app, we can easily assign tasks, track progress, and manage documents all in one place. ",
  },
  {
    avatarSrc: avatar7.src,
    name: "Morgan Lee",
    username: "morganleewhiz",
    comment:
      "This app has completely transformed how I manage my projects and deadlines.",
  },
  {
    avatarSrc: avatar8.src,
    name: "Riley Smith",
    username: "rileysmith1",
    comment:
      "The customizability and integration capabilities of this app are top-notch.",
  },
  {
    avatarSrc: avatar9.src,
    name: "Casey Harper",
    username: "casey09",
    comment:
      "Its user-friendly interface and robust features support our diverse needs.",
  },
];

export type testimonialType = {
  avatarSrc: string;
  name: string;
  username: string;
  comment: string;
};

export const productLinks = ["Features", "Pricing", "Integrations", "Product"];

export const companyLinks = [
  "About",
  "Blog",
  "Careers",
  "Manifesto",
  "Press",
  "Contact",
];

export const resourcesLinks = ["Examples", "Community", "Guides", "Docs"];

export const legalLinks = ["Privacy", "Terms", "Security"];
