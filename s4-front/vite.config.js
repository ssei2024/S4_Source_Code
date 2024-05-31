import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

export default defineConfig({
	server: {
		host: process.env.VITE_HOST,
	},
	plugins: [vue()],
	resolve: {
		alias: {
			"@": resolve(resolve(__dirname), "src"),
		},
		extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
	},
});