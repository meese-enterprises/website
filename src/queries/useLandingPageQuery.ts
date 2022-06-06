import { graphql, useStaticQuery } from "gatsby";
import { Landing } from "../types";

export type QueryResponse = {
	contentfulLandingPage: {
		chineseCompanyName: string;
		companyName: string;
		companyType: string;
		chineseTagline: string;
		tagline: string;
	};
};

export const useLandingPageQuery = (): Landing => {
	const { contentfulLandingPage } = useStaticQuery<QueryResponse>(graphql`
		query LandingQuery {
			contentfulLandingPage {
				chineseCompanyName
				companyName
				companyType
				chineseTagline
				tagline
			}
		}
	`);

	return contentfulLandingPage;
};
