// Generated with util/create-component.js
import React from "react";
import Sitemap from "./Sitemap";

export default {
  title: "Sitemap",
};

const sitemap = [
  {
    title: "Products",
    items: [
      {
        title: "Budget & Expenses Sharing",
        href: "https://www.example.com",
      },
      {
        title: "Fund Projects in Your Community",
        href: "https://www.example.com",
      },
      {
        title: "Teach & Learn",
        href: "https://www.example.com",
      },
      {
        title: "Project Planning",
        href: "https://www.example.com",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        title: "APIs",
        href: "https://www.example.com",
      },
      {
        title: "Automations",
        href: "https://www.example.com",
      },
      {
        title: "Startup Consulting",
        href: "https://www.example.com",
      },
      {
        title: "E-Commerce",
        href: "https://www.example.com",
      },
      {
        title: "Software Documentation",
        href: "https://www.example.com",
      },
      {
        title: "UX / UI Design",
        href: "https://www.example.com",
      },
      {
        title: "Web Applications",
        href: "https://www.example.com",
      },
    ],
  },
  {
    title: "Enterprise",
    items: [
      {
        title: "About us",
        href: "https://www.example.com",
      },
      {
        title: "Get Support",
        href: "https://www.example.com",
      },
      {
        title: "Media & Press",
        href: "https://www.example.com",
      },
      {
        title: "Security Policy",
        href: "https://www.example.com",
      },
      {
        title: "Terms & Conditions",
        href: "https://www.example.com",
      },
      {
        title: "Privacy Policy",
        href: "https://www.example.com",
      },
      {
        title: "Work at Oreus",
        href: "https://www.example.com",
      },
    ],
  },
  {
    title: "Developers",
    items: [
      {
        title: "Documentation",
        href: "https://www.example.com",
      },
      {
        title: "Tutorials",
        href: "https://www.example.com",
      },
      {
        title: "APIs Statuses",
        href: "https://www.example.com",
      }
    ],
  },
  {
    title: "Social",
    items: [
      {
        title: "Facebook",
        href: "https://www.example.com",
      },
      {
        title: "Linkedin",
        href: "https://www.example.com",
      },
      {
        title: "Twitter",
        href: "https://www.example.com",
      },
      {
        title: "Youtube",
        href: "https://www.example.com",
      }
    ],
  },
];

export const WithBar = () => (
  <div style={{backgroundColor: "#302e49", padding: "10px"}}>
    <Sitemap sitemap={sitemap} />
  </div>
);
