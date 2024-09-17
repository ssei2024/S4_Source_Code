import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";

export default defineConfig({
	server: {
		host: "0.0.0.0",
	},
	plugins: [vue()],
	resolve: {
		alias: {
			"@": resolve(resolve(__dirname), "src"),
		},
		extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
	},
});