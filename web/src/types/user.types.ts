export type UserType = 'client' | 'elderly_assisted' | 'mentor' | 'apprentice' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  type: UserType;
  // Add further shared fields here as the domain evolves
}

export interface Activity {
  date: string;
  description: string;
}

export interface Job {
  id: string;
  type: string;
  icon: string;
  time: string;
  client: string;
  location: string;
  address?: string;
  description?: string;
}

export interface ElderlyAssistedData extends User {
  type: 'elderly_assisted';
  nextVisit?: {
    assistantName: string;
    assistantPhoto?: string;
    time: string;
  };
  recentActivities?: Activity[];
}

export interface MentorData extends User {
  type: 'mentor';
  specialty: string;
  rating: number;
  completedJobs: number;
  partner?: {
    name: string;
    months: number;
  };
  nextJob?: Job;
  pendingJobs?: Job[];
  earnings?: {
    total: number;
    month: string;
    totalPair: number;
    services: number;
    hours: number;
  };
  newRequests?: number;
  scheduled?: number;
  completed?: number;
}


