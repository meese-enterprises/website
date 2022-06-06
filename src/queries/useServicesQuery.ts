import { graphql, useStaticQuery } from "gatsby";
import { Service } from "../types";

export type QueryResponse = {
	contentfulCompanyInformation: {
		services: {
			id: string;
			name: string;
			description: {
				childMarkdownRemark: {
					rawMarkdownBody: string;
				};
			};
			type: string;
			icon: {
				title: string;
				image: {
					src: string;
				};
			};
		}[];
	};
};

export const useServicesQuery = (): Service[] => {
	const {
		contentfulCompanyInformation: { services },
	} = useStaticQuery<QueryResponse>(graphql`
		query ServicesQuery {
			contentfulCompanyInformation {
				services {
					id
					name
					description {
						childMarkdownRemark {
							rawMarkdownBody
						}
					}
					icon {
						title
						image: resize(width: 200, quality: 100) {
							src
						}
					}
				}
			}
		}
	`);

	return services.map(({ icon, description, ...rest }) => ({
		...rest,
		description: description.childMarkdownRemark.rawMarkdownBody,
		icon: {
			alt: icon.title,
			src: icon.image.src,
		},
	}));
};
