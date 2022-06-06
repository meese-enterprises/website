import spaceImport from "contentful-import";
import inquirer from "inquirer";
import chalk from "chalk";
import os from "os";
import path from "path";
import { writeFileSync } from "fs";

// https://www.stefanjudis.com/snippets/how-to-import-json-files-in-es-modules-node-js/
import { createRequire } from "module";
const require = createRequire(import.meta.url);

// TODO: Create my own with https://github.com/contentful/contentful-export
const config = require("./config.json");

// https://bobbyhadz.com/blog/javascript-dirname-is-not-defined-in-es-module-scope
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const validateSpaceId = (input) =>
	/^[a-z0-9]{12}$/.test(input) || "Space ID must be 12 lowercase characters";

const validateContentDeliveryToken = (input) =>
	/^[a-z0-9]{64}$/.test(input) || "Content Delivery API token must be 64 alphanumeric characters";

const CONFIG_FILE_PATH = path.join(__dirname, "..", ".env");
const QUESTIONS = [
	{
		name: "spaceId",
		message: "Your Space ID",
		validate: validateSpaceId,
	},
	{
		name: "deliveryToken",
		message: "Your Content Delivery API access token",
		validate: validateContentDeliveryToken,
	},
	{
		name: "managementToken",
		message: "Your Content Management API access token",
	},
];

const setup = async () => {
	const { spaceId, deliveryToken, managementToken } = await inquirer.prompt(
		QUESTIONS,
	);

	console.log("Writing config file...");
	const envData = [`CONTENTFUL_SPACE_ID=${spaceId}`, `CONTENTFUL_ACCESS_TOKEN=${deliveryToken}`];
	writeFileSync(CONFIG_FILE_PATH, envData.join(os.EOL));

	console.log("Importing content into your Contentful ...");
	await spaceImport({ spaceId, managementToken, content: config });

	console.log(
		`All set! You can now run ${chalk.yellow(
			"yarn start",
		)} to see it in action.`,
	);
};

console.log(`
	To set up this project you need to provide your Space ID
	and the belonging API access tokens.
	You can find all the needed information in your Contentful space under:
	${chalk.yellow(
		`app.contentful.com ${chalk.red("->")} Space Settings ${chalk.red(
			"->",
		)} API keys`,
	)}
	The ${chalk.green("Content Management API Token")}
		will be used to import and write data to your space.
	The ${chalk.green("Content Delivery API Token")}
		will be used to ship published production-ready content in your Gatsby app.
	The ${chalk.green("Content Preview API Token")}
		will be used to show not published data in your development environment.
	Ready? Let's do it! 🎉
`);

setup();
