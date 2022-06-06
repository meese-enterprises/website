const assert = require("assert");
const gatsbySourceMedium = require("gatsby-source-medium/gatsby-node");
const { createClient } = require("contentful");

const getCompanyInformationEntry = (entry) =>
	entry.sys.contentType.sys.id === "companyInformation";

const LandingTemplate = require.resolve("./src/templates/Home.tsx");
const ModalTemplate = require.resolve("./src/templates/Modal.tsx");
const NotFoundTemplate = require.resolve("./src/templates/NotFound.tsx");

exports.sourceNodes = async (gatsbyConfig) => {
	const { CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_SPACE_ID } = process.env;
	const client = createClient({ space: CONTENTFUL_SPACE_ID, accessToken: CONTENTFUL_ACCESS_TOKEN });

	const { items } = await client.getEntries();
	const companyInformation = items.find(getCompanyInformationEntry);
	assert(
		companyInformation,
		"Can't fetch `companyInformation` entry from Contentful"
	);
	const { mediumUser = "@medium" } = companyInformation.fields;

	await gatsbySourceMedium.sourceNodes(gatsbyConfig, { username: mediumUser });
};

exports.createPages = async ({ actions }, themeOptions) => {
	const { landingPath = "/" } = themeOptions;
	const { createPage } = actions;

	createPage({
		path: landingPath,
		component: LandingTemplate,
	});

	createPage({
		path: "/modal",
		component: ModalTemplate,
	});

	createPage({
		path: "/404",
		component: NotFoundTemplate,
	});
};

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				assert: require.resolve("assert"),
			},
			fallback: { fs: false },
		},
	});
};
