// import type { BlocksContent } from "@strapi/blocks-react-renderer";
import type StrapiImagesTypes from "./strapi-images-types";

export default interface AboutTypes {
  attributes: {
    images: {
      data: StrapiImagesTypes[];
    };
  };
}
[];
