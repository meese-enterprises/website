const assert = require("assert");
const colors = require("./src/colors.json");

const { ACCESS_TOKEN, SPACE_ID, DETERMINISTIC } = process.env;
assert(ACCESS_TOKEN, "Contentful Access Token not provided");
assert(SPACE_ID, "Contentful Space ID not provided");

module.exports = {
	siteMetadata: {
		deterministic: Boolean(DETERMINISTIC),
	},
	plugins: [
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-typescript",
		"gatsby-plugin-styled-components",
		"gatsby-transformer-remark",
		"gatsby-plugin-image",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				name: "Meese Enterprises",
				short_name: "Meese",
				start_url: "/",
				background_color: colors.darkBackground,
				theme_color: colors.neonPink,
				display: "minimal-ui",
				icon: "logo.png",
			},
		},
		{
			resolve: "gatsby-source-contentful",
			options: {
				spaceId: SPACE_ID,
				accessToken: ACCESS_TOKEN,
			},
		},
	],
};
