const assert = require("assert");
const colors = require("./src/colors.json");

const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID, DETERMINISTIC } = process.env;
assert(CONTENTFUL_ACCESS_TOKEN, "Contentful Access Token not provided");
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
				// TODO: Get this from Contentful
				name: "Meese Enterprises",
				short_name: "Meese",
				start_url: "/",
				background_color: colors.darkPrimary,
				theme_color: colors.primaryAccent,
				display: "minimal-ui",
				icon: "logo.png",
			},
		},
		{
			resolve: "gatsby-source-contentful",
			options: {
				spaceId: CONTENTFUL_SPACE_ID,
				accessToken: CONTENTFUL_ACCESS_TOKEN,
			},
		},
	],
};
