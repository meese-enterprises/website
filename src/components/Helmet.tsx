import React from "react";
import { Helmet as ReactHelmet } from "react-helmet";
import { withTheme } from "styled-components";
import { Theme } from "../types";
import { useHelmetQuery } from "../queries/useHelmetQuery";

type Props = {
	theme: Theme;
};

const Helmet = ({ theme }: Props) => {
	const { companyName, siteDescription, logo } = useHelmetQuery();
	const title = companyName;

	return (
		<ReactHelmet htmlAttributes={{ lang: "en" }}>
			<meta charSet="utf-8" />
			<title>{title}</title>
			<meta name="description" content={siteDescription} />
			<link rel="shortcut icon" href={`https:${logo.favicon32.src}`} />
			{/* TODO: Better theme color */}
			<meta name="theme-color" content={theme.colors.darkPrimary} />
			<meta name="image" content={`https:${logo.favicon32.src}`} />
			<meta itemProp="name" content={title} />
			<meta itemProp="description" content={siteDescription} />
			<meta itemProp="image" content={`https:${logo.favicon32.src}`} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={siteDescription} />
			<meta name="og:image" content={`https:${logo.bigIcon.src}`} />
			<meta name="og:site_name" content={title} />
			<meta name="og:locale" content="en_US" />
			<meta name="og:type" content="website" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={siteDescription} />
			<meta name="twitter:image" content={`https:${logo.bigIcon.src}`} />
			<meta name="twitter:image:src" content={`https:${logo.bigIcon.src}`} />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href={`https:${logo.appleIcon.src}`}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href={`https:${logo.favicon32.src}`}
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href={`https:${logo.favicon16.src}`}
			/>
		</ReactHelmet>
	);
};
export default withTheme(Helmet);
