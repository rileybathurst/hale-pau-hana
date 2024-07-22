// import type { BlocksContent } from "@strapi/blocks-react-renderer";
import type StrapiImagesCaptionsTypes from "./strapi-images-captions-types";

export default interface AboutTypes {
  attributes: {
    images: {
      data: StrapiImagesCaptionsTypes[];
    };
  };
}
[];
