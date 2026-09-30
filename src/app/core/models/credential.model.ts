export interface Credential {
  title: string;
  organization: string;
  status: 'Currently Studying' | 'Completed';
  description: string;
  period?: string;
}