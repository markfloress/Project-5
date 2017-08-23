export interface Alien {
  id: number;
  type: string;
  submitted_by: string;
  description: string;
}

export interface NewAlien {
  type: string;
  submitted_by: string;
  id: number;
  description: string;
}