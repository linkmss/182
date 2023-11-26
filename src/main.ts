import type { ViteSSGContext } from 'vite-ssg'
import { ViteSSG } from 'vite-ssg'
import type { UserModule } from './types'
import App from './App.vue'
import { routerOptions } from '@/router'

import '@unocss/reset/tailwind-compat.css'

// install plugins
function install(ctx: ViteSSGContext, type: 'modules' | 'plugins') {
  const things = type === 'plugins'
    ? import.meta.glob<{ install: UserModule }>(`./plugins/*.ts`, { eager: true })
    : import.meta.glob<{ install: UserModule }>(`./modules/*.ts`, { eager: true })

  Object.values(things).forEach(i => i.install?.(ctx))
}

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  routerOptions,
  (ctx) => {
    install(ctx, 'plugins')
    install(ctx, 'modules')
  },
)
