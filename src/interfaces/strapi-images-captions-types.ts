export default interface StrapiImagesCaptionsTypes {
  attributes: {
    name: string;
    url: string;
    width: number;
    height: number;
    alternativeText?: string;
    caption: string;
  };
}
