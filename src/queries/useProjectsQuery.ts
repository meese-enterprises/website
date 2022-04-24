import { graphql, useStaticQuery } from "gatsby";
import { Project } from "../types";

export type QueryResponse = {
	contentfulCompanyInformation: {
		projects: {
			id: string;
			name: string;
			description: string;
			homepage?: string;
			repository?: string;
			caseStudy?: string;
			publishedDate: string;
			type: string;
			logo: {
				title: string;
				image: {
					src: string;
				};
			};
		}[];
	};
};

export const useProjectsQuery = (): Project[] => {
	const {
		contentfulCompanyInformation: { projects },
	} =
		useStaticQuery<QueryResponse>(graphql`
			query ProjectsQuery {
				contentfulCompanyInformation {
					projects {
						id
						name
						description
						homepage: projectUrl
						repository: repositoryUrl
						caseStudy: caseStudyUrl
						publishedDate(formatString: "YYYY")
						type
						logo {
							title
							image: resize(width: 200, quality: 100) {
								src
							}
						}
					}
				}
			}
		`);

	return projects.map(({ logo, ...rest }) => ({
		...rest,
		logo: {
			alt: logo.title,
			src: logo.image.src,
		},
	}));
};
