import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "your_project_id",
  dataset: "production",
  apiVersion: "2024-08-10",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});
