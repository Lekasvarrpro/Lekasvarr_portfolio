export interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  github?: string;
  live?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Tech Job Market Analysis & Salary Prediction",
    description: "Built a regression-based salary prediction model and created an interactive Power BI dashboard for hiring and salary insights.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Power BI"],
    highlights: ["90% prediction accuracy", "Interactive Power BI dashboard", "Regression-based modeling"],
    github: "https://github.com/Lekasvarrpro",
  },
  {
    title: "Multi-Disease Prediction System",
    description: "Developed a full-stack AI healthcare system predicting Heart, Liver, and Diabetes diseases with high accuracy.",
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "React"],
    highlights: ["89.2% accuracy", "3 disease predictions", "Full-stack AI application"],
    github: "https://github.com/Lekasvarrpro",
  },
];
