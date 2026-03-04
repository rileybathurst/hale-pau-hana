import type { BlocksContent } from "@strapi/blocks-react-renderer";

export default interface RateTypes {
  children: BlocksContent;
  cleaning: BlocksContent;
  direct: BlocksContent;
  taxRate: number;
  peak_season_start: string;
  peak_season_end: string;
  off_season_rate_min: number;
  off_season_rate_max: number;
  peak_rate_min: number;
  peak_rate_max: number;
  availability: string;
  call_to_action: string;
};
