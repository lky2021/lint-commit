import permission from './permission'
import type { App } from 'vue'

export default function registerPermissionDirective(app: App) {
  app.directive('permission', permission)
}
