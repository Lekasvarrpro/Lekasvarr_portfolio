export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  type: "work" | "internship";
}

export const experience: Experience[] = [
  {
    role: "Artificial Intelligence Intern",
    company: "GenZ Educatewing",
    period: "Jul 2025 – Sep 2025",
    description: [
      "Improved AI model performance by 20% through optimization techniques",
      "Implemented a YOLO-based object detection system achieving 90% real-time accuracy",
    ],
    type: "internship",
  },
];
