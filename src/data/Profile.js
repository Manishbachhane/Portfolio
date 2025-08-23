// src/data/Profile.js
// Adjust the path as necessary
const profile = {
  name: "Manish Bachhane",
  role: "Frontend Developer (React)",
  blurb:
    "I build fast, beautiful web apps with a focus on performance, DX, and clean architecture.",
  location: "India",
  email: "manishbachhane@gmail.com",
  phone: "+91 7879207472",
  resume: "/manish.pdf", // Path to your resume
  socials: {
    github: "https://github.com/Manishbachhane",
    linkedin: "https://www.linkedin.com/in/manish-bachhane-709661254/?trk=opento_sprofile_details",
  },
};  

const skills = [
  "C","C++","JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Express",
  "Tailwind CSS", "Redux", "REST APIs", "MongoDB",
];

const projects = [
  {
    title: "GigLink – Freelancers Marketplace",
    description:
      "Full-stack platform connecting freelancers with employers. Secure auth, escrow-style payments (mock), real-time chat, and powerful search.",
    stack: ["Next.js", "Node", "Express", "MongoDB", "Socket.io", "Tailwind"],
    links: {
      live: "#",
      repo: "#",
    },
    highlights: ["JWT auth", "SSR & ISR", "Chat + notifications", "Admin dashboard"],
  },
  {
    title: "Refokus-Inspired Portfolio",
    description:
      "High-performance single-page portfolio with buttery scroll, parallax, and neon UI blocks.",
    stack: ["React", "Vite", "Framer Motion", "GSAP", "Tailwind"],
    links: { live: "#", repo: "#" },
    highlights: ["Lighthouse 95+", "Responsive", "Accessibility A"],
  },
  {
    title: "ShopSwift – E-commerce Frontend",
    description:
      "Modern storefront with cart, filters, and Stripe mock checkout. Integrates product reviews and wishlist.",
    stack: ["React", "Redux Toolkit", "Tailwind", "Stripe (mock)", "Vite"],
    links: { live: "#", repo: "#" },
    highlights: ["Virtualized lists", "Code-split", "Dark mode"],
  },
];



// Export all the data
export { profile, skills, projects };
