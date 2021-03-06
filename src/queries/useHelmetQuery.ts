import { graphql, useStaticQuery } from "gatsby";
import { Icon } from "../types";

type QueryResponse = {
	contentfulCompanyInformation: {
		companyName: string;
		siteDescription: string;
		logo: {
			favicon16: Icon;
			favicon32: Icon;
			bigIcon: Icon;
			appleIcon: Icon;
		};
	};
};

export const useHelmetQuery = () => {
	const { contentfulCompanyInformation } =
		useStaticQuery<QueryResponse>(graphql`
			query HelmetQuery {
				contentfulCompanyInformation {
					companyName
					siteDescription
					logo {
						favicon16: resize(width: 16) {
							src
						}
						favicon32: resize(width: 32) {
							src
						}
						bigIcon: resize(width: 192) {
							src
						}
						appleIcon: resize(width: 180) {
							src
						}
					}
				}
			}
		`);

	return contentfulCompanyInformation;
};
