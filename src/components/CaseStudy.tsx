import React, { ReactNode } from "react";
import { Box, Flex, Heading, Text } from "rebass/styled-components";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Author, CaseStudy as CaseStudyType } from "../types";
import { MEDIUM_URL } from "../utils/constants";
import { Card } from "./Card";
import ImageLabel from "./ImageLabel";

type PostProps = CaseStudyType;

export const CaseStudy = ({ title, text, cover, url, date, time }: PostProps) => (
	<PostContainer url={url} title={title}>
		<EllipsisHeading m={3} color="darkPrimary">
			{title}
		</EllipsisHeading>
		{cover && <CoverImage src={cover} height="200px" alt={title} />}
		<Text m={3} color="darkPrimary">
			{text}
		</Text>
		<ImageLabel bg="primary" color="lightPrimary" position="bottom-right" round>
			{`${date} - ${Math.ceil(time)} min`}
		</ImageLabel>
	</PostContainer>
);

type MoreStudiesProps = {
	author: Author;
	number: number;
};

// TODO: Use this somewhere or get rid of it
export const MoreStudies = ({ author, number }: MoreStudiesProps) => (
	<PostContainer
		title={`Open ${author.username} profile`}
		url={`${MEDIUM_URL}/${author.username}/`}
	>
		<Flex
			flexDirection="column"
			justifyContent="space-between"
			style={{ height: "100%" }}
		>
			<Box>
				<EllipsisHeading fontSize={5} my={2}>
					Hooray! &nbsp;
					<span role="img" aria-label="party">
						🎉
					</span>
				</EllipsisHeading>
				<Heading lineHeight={1.5}>
					It seems that
					<Text color="darkSecondary">{author.name}</Text>
					{`has published ${number} more posts!`}
				</Heading>
			</Box>
			<Heading color="primary" mt={5} textAlign="right">
				Go to Medium &nbsp;
				<FontAwesomeIcon icon="arrow-right" title="Go to Medium" />
			</Heading>
		</Flex>
	</PostContainer>
);

type PostContainerProps = {
	url: string;
	title: string;
	children: ReactNode;
};

const PostContainer = ({ url, title, children }: PostContainerProps) => (
	<a
		href={url}
		target="__blank"
		title={title}
		style={{ textDecoration: "none" }}
	>
		<Card p={0} pb={4}>
			{children}
		</Card>
	</a>
);

const CoverImage = styled.img`
	width: 100%;
	object-fit: cover;
`;

const EllipsisHeading = styled(Heading)`
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-inline-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
`;
