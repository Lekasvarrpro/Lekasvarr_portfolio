export interface Hackathon {
  title: string;
  organizer: string;
  date: string;
  description: string;
  result?: string;
}

// Add your hackathon participations here
export const hackathons: Hackathon[] = [];
