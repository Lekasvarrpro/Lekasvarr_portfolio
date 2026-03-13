export interface Certification {
  title: string;
  issuer: string;
  icon?: string;
}

export const certifications: Certification[] = [
  { title: "Python for Data Science", issuer: "NPTEL" },
  { title: "Oracle Generative AI", issuer: "Oracle" },
  { title: "Deep Learning and AI", issuer: "Infosys Springboard" },
  { title: "ServiceNow Micro-Certification", issuer: "ServiceNow" },
  { title: "Data Science", issuer: "NASSCOM FutureSkills" },
  { title: "Foundations of Prompt Engineering", issuer: "AWS" },
];
