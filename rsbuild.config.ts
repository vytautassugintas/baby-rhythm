import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export default defineConfig({
    html: {
        title: 'Baby Rhythm',
        tags: [{ tag: 'link', head: true, attrs: { rel: 'manifest', href: 'manifest.json' } }],
    },
    plugins: [pluginReact()],
})
