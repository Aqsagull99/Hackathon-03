import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId: "wqp6chfr",
  dataset: "production",
  apiVersion: "2023-06-20", 
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token: process.env.SANITY_API_TOKEN!
})


// SANITY_API_TOKEN