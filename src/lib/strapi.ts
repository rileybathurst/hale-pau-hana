// import { boolean } from "astro/zod";
import qs from "qs";

interface Props {
  endpoint: string;
  query?: Record<string, string>;
  wrappedByKey?: string;
  wrappedByList?: boolean;
  // oh no this needs a generic?
  // https://docs.strapi.io/dev-docs/api/query-engine/populating
  // populate?: Array[] | null;
  populate?: {
    [key: string]: {
      populate: boolean;
    };
  } | null;
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @param populate - The fields to populate
 * @returns
 */

// console.log(import.meta.env.STRAPI_URL);

export default async function fetchApi<T>({
  endpoint,
  query,
  wrappedByKey,
  wrappedByList,
  populate,
}: Props): Promise<T> {
  if (endpoint.startsWith("/")) {
    endpoint = endpoint.slice(1);
  }

  const queryPopulatedBracketed = qs
    .stringify({ populate })
    .replace(/%5B/g, "[")
    .replace(/%5D/g, "]");

  const url = new URL(
    `${import.meta.env.STRAPI_URL}api/${endpoint}${populate ? `?${queryPopulatedBracketed}` : ""}`
  );

  // with populate and no ggraphiql checking the structure on the api helps
  // console.log(url);

  if (query) {
    for (const [key, value] of Object.entries(query)) {
      url.searchParams.append(key, value);
    }
  }
  const res = await fetch(url.toString());
  let data = await res.json();

  if (wrappedByKey) {
    data = data[wrappedByKey];
  }

  if (wrappedByList) {
    data = data[0];
  }

  return data as T;
}
