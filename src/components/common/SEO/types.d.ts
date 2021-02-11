export type Props = {
  description?: string;
  lang?: string;
  meta?: Array<{ name: string; content: any; property?: undefined; } | { property: string; content: any; name?: undefined; }>;
  title: string;
};
