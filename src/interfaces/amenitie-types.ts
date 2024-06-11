import type { BlocksContent } from "@strapi/blocks-react-renderer";
import type StrapiImagesTypes from "./strapi-images-types";

export default interface AmenitieTypes {
  id: number;
  attributes: {
    createdAt: string;
    text: BlocksContent;
    images: {
      data: StrapiImagesTypes[];
    };
  };
}
[];
