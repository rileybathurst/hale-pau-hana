import type { BlocksContent } from "@strapi/blocks-react-renderer";

export default interface ContactTypes {
  attributes: {
    name: string;
    email: string;
    phone: string;
    address: string;
    postal: BlocksContent;
  };
}
[];
