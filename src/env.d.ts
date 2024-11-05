/// <reference path="../.astro/types.d.ts" />
// https://docs.astro.build/en/guides/cms/strapi/#adding-the-strapi-url-in-env

/// <reference path="../.astro/db-types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly STRAPI_URL: string;
  readonly STRAPI_IMAGE_URL: string;
}
