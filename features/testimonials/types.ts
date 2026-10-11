export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  initials: string;
  quote: string;
  featured?: boolean;
}