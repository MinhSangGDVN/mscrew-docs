// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Mscrew Docs',
			defaultLocale: 'vi',
            locales: {vi: {label: 'Tiếng Việt', lang: 'vi',},
	        logo: {src: './src/assets/logo.png',},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/MinhSangGDVN/mscrew-docs'}, { icon: 'discord', label: 'Discord', href: '#'} ],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
