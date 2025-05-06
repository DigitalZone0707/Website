export interface CuratedProject {
  name: string;
  image: string;
}
export interface Project {
  id: number;
  name: string;
  order: number;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  github: string;
  image: string;
  url: string;
  topics: string[];
}

export interface GitHubUser {
  login: string;
  url: string;
}

export interface Member {
  id: string;
  username: string;
  name: string;
  avatarUrl: string;
  github: string;
  type: string;
  company: string | null;
  blog: string | null;
  location: string | null;
  email: string | null;
  hireable: string | null;
  bio: string | null;
  twitter: string | null;
  repos: number;
  followers: number;
  following: number;
  createdAt: Date;
  updatedAt: Date;
}
