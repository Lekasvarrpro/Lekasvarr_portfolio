export interface SkillCategory {
  category: string;
  icon: string;
  skills: { name: string; level: number }[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming",
    icon: "Code2",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 70 },
      { name: "SQL", level: 80 },
      { name: "JavaScript", level: 75 },
    ],
  },
  {
    category: "AI & Data Science",
    icon: "Brain",
    skills: [
      { name: "Regression", level: 88 },
      { name: "Classification", level: 85 },
      { name: "Neural Networks", level: 75 },
      { name: "EDA & Feature Eng.", level: 85 },
    ],
  },
  {
    category: "Libraries & Tools",
    icon: "Library",
    skills: [
      { name: "Pandas & NumPy", level: 90 },
      { name: "Scikit-learn", level: 88 },
      { name: "Matplotlib / Seaborn", level: 80 },
      { name: "Git & GitHub", level: 82 },
    ],
  },
  {
    category: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "React", level: 78 },
      { name: "HTML & CSS", level: 85 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
];

export const softSkills = [
  "Analytical Thinking",
  "Problem Solving",
  "Communication",
  "Teamwork",
  "Adaptability",
  "Time Management",
];
