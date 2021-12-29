module.exports = {
	// In your gatsby-config.js
	//plugins: [`gatsby-plugin-fontawesome-css`],
  
	siteMetadata: {
		title: 'Celeste Bolos e Salgados'
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-postcss',
		{
			resolve: 'gatsby-plugin-purgecss',
			options: {
				printRejected: true,
				tailwind: true
			}
		}
	]
	

}