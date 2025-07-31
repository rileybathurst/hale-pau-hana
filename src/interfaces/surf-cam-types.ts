export default interface SurfCamTypes {
  youtube: string;
  poster: {
    formats: {
      small: {
        url: string;
      };
      thumbnail: {
        url: string;
      };
    };
  };
}
