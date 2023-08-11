import vuetify from 'vite-plugin-vuetify'
import { InlineConfig } from 'vite'

// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	srcDir: 'client/',

	build: { transpile: ['vuetify'] },
	imports: { dirs: ['./stores'] },
	apollo: {
		autoImports: true,
		proxyCookies: true,
		clients: {
			default: { httpEndpoint: 'https://spacex-production.up.railway.app/' },
		},
	},
	modules: ['@nuxtjs/apollo', ['@pinia/nuxt', { autoImports: ['defineStore', 'acceptHMRUpdate'] }]],
	hooks: {
		'vite:extendConfig': (config: InlineConfig) => {
			config?.plugins?.push(vuetify())
		},

		'pages:extend'(routes) {
			routes.push(
				// Example route definition
				{
					name: 'Rocket',
					path: '/rocketdetail',
					// component: () => import('~/pages/rocketdetail.vue').then(r => r.default ||r),
					file: '/pages/rocketdetail.vue',
				}
			)
		}
	},

	// Define your routes here
	// routeRules: {

	// 	'/rocketdetails/': {
	// 		swr: true,
	// 		redirect: '/client/pages/rocketdetail'
	// 	}


	// extendRoutes(routes) {
	// 	routes.push(
	// 		// Example route definition
	// 		{
	// 			name: 'Rocket',
	// 			path: '/rocketdetail/_object',
	// 			component: 'pages/rocketdetail/_id.vue',
	// 		}
	// 	)
	// 	// Add more routes as needed
	// },

})



