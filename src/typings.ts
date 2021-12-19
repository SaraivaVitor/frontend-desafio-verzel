export interface Lesson {
  _id: string;
  date: string;
  description: string;
  name: string;
}
export interface Module {
  _id: string;
  name: string;
  totalQuanity: string;
  lessons: Lesson[];
}
