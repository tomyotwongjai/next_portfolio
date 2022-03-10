import { IconType } from 'react-icons';

export interface Service {
  title: string;
  about: string;
}

export interface Skill {
  name: string;
  Icon: IconType;
}

export interface Tech {
  name: string;
  Icon: IconType;
}

export interface IsProjects {
  id: number;
  name: string;
  description: string;
  image_path: string;
  deploy_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export type Category = 'latest' | 'previous';
