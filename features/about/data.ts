export interface DriveCard {
  icon: string
  title: string
  description: string
}

export interface Principle {
  number: string
  title: string
  body: string
}

export interface Stat {
  value: string
  label: string
}

export interface AboutData {
  sectionLabel: string
  heading: string
  paragraphs: string[]
  driveCards: DriveCard[]
  philosophyHeading: string
  philosophyContent: string
  philosophyPrinciples: Principle[]
  stats: Stat[]
  openTo: string[]
  tags: string[]
  ctaText: string
  ctaHref: string
  quote: string
}

export const aboutData: AboutData = {
  sectionLabel: "Who I Am",
  heading: "The Developer Behind The Work",

  paragraphs: [
    "For me, development is more than building interfaces and writing backend logic — it's about creating products that solve meaningful problems and deliver real value. I enjoy taking ideas from concept to reality, turning complex requirements into intuitive experiences that users can easily understand and businesses can confidently rely on. Whether I'm designing a frontend experience, architecting a backend system, or planning application workflows, my goal remains the same: build solutions that are thoughtful, scalable, and built to last.",
    "What excites me most about software development is the endless opportunity to learn, improve, and create. Every project presents a unique challenge, and I enjoy the process of finding efficient solutions, exploring new technologies, and continuously refining my craft. I believe great products are created when technology, design, and user needs work together seamlessly.",
  ],

  driveCards: [
    {
      icon: "Puzzle",
      title: "Problem Solving",
      description: "I enjoy breaking down complex challenges into simple, effective solutions.",
    },
    {
      icon: "BookOpen",
      title: "Continuous Learning",
      description: "Technology evolves quickly, and I'm committed to growing alongside it.",
    },
    {
      icon: "Users",
      title: "User-Centered Thinking",
      description: "Every feature and interaction should create value for the people using it.",
    },
    {
      icon: "ShieldCheck",
      title: "Attention To Quality",
      description: "I focus on building solutions that are maintainable, scalable, and reliable.",
    },
  ],

  philosophyHeading: "How I Approach Every Project",
  philosophyContent:
    "My approach combines technical excellence with practical thinking. Before writing code, I focus on understanding the problem, identifying the user's needs, and planning the best path forward. This helps me create solutions that are not only functional but also efficient, maintainable, and aligned with business goals. I value clean architecture, clear communication, and continuous improvement throughout the development process.",

  philosophyPrinciples: [
    {
      number: "01",
      title: "Understand First",
      body: "Before writing code, I dive deep into understanding the problem, user needs, and business goals. This clarity drives better solutions.",
    },
    {
      number: "02",
      title: "Design for Simplicity",
      body: "Complex solutions hide poor thinking. I focus on clear architectures and intuitive designs that others can understand and maintain.",
    },
    {
      number: "03",
      title: "Build with Purpose",
      body: "Every feature, component, and line of code serves a purpose. I avoid unnecessary complexity and always think about user value.",
    },
    {
      number: "04",
      title: "Iterate and Improve",
      body: "Great products evolve. I embrace feedback, refactor regularly, and continuously optimize for performance and maintainability.",
    },
  ],

  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Delivered" },
    { value: "15+", label: "Happy Clients" },
    { value: "100%", label: "Quality Focused" },
  ],

  openTo: [
    "Full Stack Development",
    "Frontend Specialization",
    "Freelance Projects",
    "Team Collaboration",
  ],

  tags: [
    "Problem Solver",
    "Product Thinker",
    "Full Stack Developer",
    "Lifelong Learner",
    "Team Player",
    "Creative Builder",
  ],

  ctaText: "Explore My Projects",
  ctaHref: "/projects",

  quote: "Great software isn't just built for users — it's built around them.",
}