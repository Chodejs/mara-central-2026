/*
 * MARA CENTRAL - LEARNING PATH DATA
 * ---------------------------------
 * This file acts as our local "database" for the learning modules.
 * It contains an array of objects, where each object represents a specific
 * technology or section (HTML, CSS, JS, etc.).
 *
 * IMAGES:
 * Images are referenced from the 'public/images' directory.
 * When using Vite, public assets are served at the root path '/'.
 */

export const learningModules = [
  {
    id: 1,
    title: "HTML5",
    description: "The skeleton of the web. Structuring content with semantic tags.",
    image: "/images/html-module.jpg", // Path to your uploaded image
    link: "/lessons/html",
    status: "Completed", // Examples: 'Completed', 'In Progress', 'Planned'
  },
  {
    id: 2,
    title: "CSS3",
    description: "Styling and layout. Making things look proper smart.",
    image: "/images/css-module.jpg",
    link: "/lessons/css",
    status: "In Progress",
  },
  {
    id: 3,
    title: "JavaScript",
    description: "The brains of the operation. Logic, DOM manipulation, and interactivity.",
    image: "/images/javascript-module.jpg",
    link: "/lessons/javascript",
    status: "Planned",
  },
  {
    id: 4,
    title: "React",
    description: "Modern UI development. Components, hooks, and state management.",
    image: "/images/react-module.jpg",
    link: "/lessons/react",
    status: "Planned",
  },
  {
    id: 5,
    title: "TypeScript",
    description: "JavaScript with superpowers. Type safety for robust code.",
    image: "/images/typescript-module.jpg",
    link: "/lessons/typescript",
    status: "Planned",
  },
  {
    id: 6,
    title: "PHP",
    description: "Server-side scripting. The old faithful of the web.",
    image: "/images/php-module.jpg",
    link: "/lessons/php",
    status: "Planned",
  },
  {
    id: 7,
    title: "MySQL",
    description: "Database management. Storing data like a pro.",
    image: "/images/mysql-module.jpg",
    link: "/lessons/mysql",
    status: "Planned",
  },
  {
    id: 8,
    title: "Python",
    description: "Versatile scripting. Good for backends and data.",
    image: "/images/python-module.jpg",
    link: "/lessons/python",
    status: "Planned",
  },
  {
    id: 9,
    title: "Projects",
    description: "Real-world applications. Where the rubber meets the road.",
    image: "/images/projects-module.jpg",
    link: "/projects",
    status: "Ongoing",
  },
];