import { IconName } from "@fortawesome/fontawesome-svg-core";
import { DefaultTheme } from "styled-components";
import { Theme as RebassTheme } from "@rebass/preset";

export type Theme = DefaultTheme & RebassTheme;

export type Image = {
	src: string;
	alt: string;
};

export type Favicon = {
	src: string;
};

export type Project = {
	name: string;
	description: string;
	homepage: string;
	repository: string;
	type: string;
	publishedDate: string;
	logo: Image;
};

export type About = {
	markdown: string;
	logo: Image;
};

export type SocialLink = {
	url: string;
	name: string;
	icon: IconName;
};

export type MediumAuthor = {
	id: string;
	name: string;
	username: string;
};

export type Landing = {
	chineseCompanyName: string;
	companyName: string;
	companyType: string;
	chineseTagline: string;
	tagline: string;
};

export type Footer = {
	companyName: string;
	socialLinks: SocialLink[];
};
