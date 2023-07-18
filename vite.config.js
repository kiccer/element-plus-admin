import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),

        vueJsx(),

        // https://github.com/antfu/unplugin-auto-import#configuration
        AutoImport({
            imports: [
                'vue',
                'vue-router',
                '@vueuse/core'
            ],
            eslintrc: {
                enabled: true,
                globalsPropValue: 'readonly'
            },
            resolvers: [ElementPlusResolver()]
        }),

        // https://github.com/antfu/unplugin-vue-components#configuration
        Components({
            resolvers: [
                ElementPlusResolver(),
                {
                    type: 'component',
                    resolve: name => {
                        if (/^r-/.test(name)) {
                            return {
                                from: `@/components/r-common/${name}`
                            }
                        }
                    }
                }
            ]
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
