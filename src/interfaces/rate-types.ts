import type { BlocksContent } from "@strapi/blocks-react-renderer";

export default interface RateTypes {
  children: BlocksContent;
  cleaning: BlocksContent;
  direct: BlocksContent;
  taxRate: number;
  peak_season_start: string;
  peak_season_end: string;
  off_season_rate: number;
  peak_rate: number;
  availability: string;
}
[];
