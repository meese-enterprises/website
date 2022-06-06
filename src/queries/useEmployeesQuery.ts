import { graphql, useStaticQuery } from "gatsby";
import { Employee } from "../types";

export type QueryResponse = {
	contentfulCompanyInformation: {
		employees: {
			id: string;
			name: string;
			profilePhoto: {
				title: string;
				image: {
					src: string;
				};
			};
			role: string;
			description: {
				childMarkdownRemark: {
					rawMarkdownBody: string;
				};
			};
			website: string;
		}[];
	};
};

export const useEmployeesQuery = (): Employee[] => {
	const {
		contentfulCompanyInformation: { employees },
	} = useStaticQuery<QueryResponse>(graphql`
		query EmployeesQuery {
			contentfulCompanyInformation {
				employees {
					id
					profilePhoto {
						title
						image: resize(width: 200, quality: 100) {
							src
						}
					}
					name
					role
					description {
						childMarkdownRemark {
							rawMarkdownBody
						}
					}
					website
				}
			}
		}
	`);

	return employees.map(({ profilePhoto, description, ...rest }) => ({
		description: description.childMarkdownRemark.rawMarkdownBody,
		profilePhoto: {
			alt: profilePhoto.title,
			src: profilePhoto.image.src,
		},
		...rest,
	}));
};
