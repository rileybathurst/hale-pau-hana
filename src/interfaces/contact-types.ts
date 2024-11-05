import type { BlocksContent } from "@strapi/blocks-react-renderer";

export default interface ContactTypes {
  name: string;
  email: string;
  phone: string;
  address: string;
  postal: BlocksContent;
};
[];
