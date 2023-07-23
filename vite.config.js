import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const config = defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: '~',
				replacement: resolve(__dirname, 'src')
			}
		]
	}
});

export default config