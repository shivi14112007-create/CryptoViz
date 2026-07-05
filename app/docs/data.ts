export interface DocCategory {
  title: string;
  description: string;
  content: string;
}

export const docCategories: DocCategory[] = [
  {
    title: "Getting Started",
    description: "An overview of the CryptoViz visualization architecture and baseline requirements.",
    content: "CryptoViz is a real-time cryptocurrency data visualization dashboard. It delivers an intuitive environment engineered to break down complex cryptographic concepts and cipher execution models into clear, human-readable algorithmic visualizations."
  },
  {
    title: "Installation & Setup",
    description: "The execution scripts needed to clone, provision, and deploy the application locally.",
    content: "1. Clone the project code framework from the source repository:\ngit clone https://github.com/csxark/CryptoViz.git\n2. Initialize dependencies using the node package manager:\nnpm install\n3. Boot the local development proxy network environment:\nnpm run dev"
  },
  {
    title: "Features Overview",
    description: "A functional layout map of the underlying cipher playgrounds and dynamic grids.",
    content: "• Comprehensive algorithm simulation sandboxes covering symmetric and asymmetric logic profiles.\n• Step-by-step state animations tracking internal matrix transformations.\n• Performance-optimized charts graphing metric data without dropping UI frames."
  },
  {
    title: "Project Architecture",
    content: "The application relies on Next.js, React context modules, and Tailwind utility presets. High-latency cryptographic calculations are intelligently partitioned onto dedicated background execution scopes utilizing independent Web Workers (cipher.worker.ts) to guarantee zero rendering blockades.",
    description: "An analytical breakdown of the system layout, module constraints, and thread offloading."
  },
  {
    title: "Contribution Guide",
    description: "Standard workflow instructions for opening branches, testing code, and opening PRs.",
    content: "All codebase contributions must adhere to clean design patterns. Fork the repository, isolate changes into structural feature branches, run the vitest unit test suite to ensure strict compliance, and open a pull request targeting the main line."
  },
  {
    title: "Troubleshooting & FAQs",
    description: "Pre-documented diagnostic resolutions for package state anomalies and execution faults.",
    content: "Experiencing setup discrepancies? Run a strict 'npm ci' to ensure a complete and exact rebuild of the package lock definitions. Verify your local runtime environment strictly aligns with modern LTS node standards."
  }
];