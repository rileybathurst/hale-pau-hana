import type { BlocksContent } from "@strapi/blocks-react-renderer";

export default interface RateTypes {
  attributes: {
    taxId: string;
    vrbo: string;
    children: BlocksContent;
    cleaning: BlocksContent;
    direct: BlocksContent;
    taxRate: number;
  };
}
[];
