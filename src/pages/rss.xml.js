import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET(context) {
	return rss({
		title: 'AWFixers Research',
		description: 'Real Research for Real Change',
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob('./posts/*.{md,mdx}')),
		stylesheet: './rss/styles.xsl',
		customData: `<language>en-us</language>`
	});
}
