import { graphql, useStaticQuery } from "gatsby";
import { Landing, SocialLink } from "../types";

type QueryResponse = {
	contentfulCompanyInformation: {
		companyName: string;
		//roles: string[];
		socialLinks: SocialLink[];
	};
	site: {
		siteMetadata: {
			deterministic: boolean;
		};
	};
};

export const useSiteQuery = (): Landing & { deterministic: boolean } => {
	const { contentfulCompanyInformation, site } =
		useStaticQuery<QueryResponse>(graphql`
			query SiteQuery {
				contentfulCompanyInformation {
					companyName
					socialLinks {
						url
						name
						icon: fontAwesomeIcon
					}
				}
				site {
					siteMetadata {
						deterministic
					}
				}
			}
		`);

	return { ...contentfulCompanyInformation, ...site.siteMetadata };
};
