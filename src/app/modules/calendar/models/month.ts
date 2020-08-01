export interface Month {
  name: string;
  data: Array<{
    dayOfWeek: string,
    day: number,
    fullDate: string
  }>;
}
