import React from "react";
import { Helmet as ReactHelmet } from "react-helmet";
import { withTheme } from "styled-components";
import { Theme } from "../types";
import { useHelmetQuery } from "../queries/useHelmetQuery";
import { useLocation } from "@reach/router";

type Props = {
	theme: Theme;
};

const Helmet = ({ theme }: Props) => {
	let baseUrl = "";
	const { protocol, host } = useLocation();
	if (protocol && host) {
		baseUrl = `${protocol}//${host}`;
	} else {
		// TODO: Better method for this
		baseUrl = "https://meese.enterprises";
	}

	const { companyName, siteDescription, logo } = useHelmetQuery();
	const title = companyName;

	return (
		<ReactHelmet htmlAttributes={{ lang: "en" }}>
			<meta charSet="utf-8" />
			<title>{title}</title>

			<meta name="description" content={siteDescription} />
			<meta name="image" content={`${baseUrl}${logo.favicon32.src}`} />
			<link rel="shortcut icon" href={`${baseUrl}${logo.favicon32.src}`} />
			<meta name="theme-color" content={theme.colors.primaryAccent} />

			<meta itemProp="name" content={title} />
			<meta itemProp="description" content={siteDescription} />
			<meta itemProp="image" content={`${baseUrl}${logo.favicon32.src}`} />

			<meta name="og:site_name" content={title} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={siteDescription} />
			<meta name="og:image" content={`${baseUrl}${logo.bigIcon.src}`} />
			<meta name="og:url" content={baseUrl} />
			<meta name="og:locale" content="en_US" />
			<meta name="og:type" content="website" />

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={siteDescription} />
			<meta name="twitter:image" content={`${baseUrl}${logo.bigIcon.src}`} />
			<meta name="twitter:image:src" content={`${baseUrl}${logo.bigIcon.src}`} />

			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href={`${baseUrl}${logo.appleIcon.src}`}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href={`${baseUrl}${logo.favicon32.src}`}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href={`${baseUrl}${logo.favicon16.src}`}
			/>
		</ReactHelmet>
	);
};
export default withTheme(Helmet);
