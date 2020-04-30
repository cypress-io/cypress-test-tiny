import './helper'

console.log('plugins TS')

export default function (on: Cypress.PluginEvents, _config: Cypress.ConfigOptions) {
  on('task', {
    hello: async () => {
      return null
    }
  })
}
