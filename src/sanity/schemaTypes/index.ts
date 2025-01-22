import { type SchemaTypeDefinition } from 'sanity'
import hero from './hero'
import dawnhero from './dawnhero'
import { footerSchema, letterSchema } from './footer'
import product from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, dawnhero , product ,  footerSchema, letterSchema],
}





