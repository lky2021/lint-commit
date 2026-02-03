import type { RouteRecordRaw } from 'vue-router'

import homeRouter from './modules/home.ts'
import aboutRouter from './modules/about.ts'

export const asyncRoutes: RouteRecordRaw[] = [...homeRouter, ...aboutRouter]
