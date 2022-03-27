import { graphql, useStaticQuery } from "gatsby";
import { AboutMe } from "../types";

export type QueryResponse = {
	contentfulCompanyInformation: {
		aboutMe: {
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

export const useAboutMeQuery = (): AboutMe => {
	const {
		contentfulCompanyInformation: { aboutMe, logo },
	} = useStaticQuery<QueryResponse>(graphql`
		query AboutMeQuery {
			contentfulCompanyInformation {
				aboutMe {
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
		markdown: aboutMe.childMarkdownRemark.rawMarkdownBody,
		logo: {
			alt: logo.title,
			src: logo.image.src,
		},
	};
};
