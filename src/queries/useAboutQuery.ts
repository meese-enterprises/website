import { graphql, useStaticQuery } from "gatsby";
import { About } from "../types";

export type QueryResponse = {
	contentfulCompanyInformation: {
		about: {
			childMarkdownRemark: {
				rawMarkdownBody: string;
			};
		};
		logo: {
			title: string;
			image: {
				src: string;
			};
		};
	};
};

export const useAboutQuery = (): About => {
	const {
		contentfulCompanyInformation: { about, logo },
	} = useStaticQuery<QueryResponse>(graphql`
		query AboutQuery {
			contentfulCompanyInformation {
				about {
					childMarkdownRemark {
						rawMarkdownBody
					}
				}
				logo {
					title
					image: resize(width: 450, quality: 100) {
						src
					}
				}
			}
		}
	`);

	return {
		markdown: about.childMarkdownRemark.rawMarkdownBody,
		logo: {
			alt: logo.title,
			src: logo.image.src,
		},
	};
};
