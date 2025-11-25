import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {cloudinaryAssetSourcePlugin} from 'sanity-plugin-cloudinary'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Website',

  projectId: 'cg2zend1',
  dataset: 'production',

  plugins: [
    structureTool(), 
    visionTool(),
    cloudinaryAssetSourcePlugin()
  ],

  schema: {
    types: schemaTypes,
  },
})
