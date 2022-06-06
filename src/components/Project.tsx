import React from "react";
import SocialLink from "../components/SocialLink";
import ImageLabel from "./ImageLabel";
import Hide from "../components/Hide";
import { Box, Flex, Image, Text } from "rebass/styled-components";
import styled from "styled-components";
import { Project as ProjectType } from "../types";
import { Card } from "./Card";

type Props = ProjectType;

// TODO: Summary content then click for description
const Project = ({
	name,
	description,
	homepage,
	repository,
	caseStudy,
	type,
	publishedDate,
	logo,
}: Props) => (
	<Card p={0}>
		<Flex style={{ height: CARD_HEIGHT }}>
			<TextContainer>
				<span>
					<Title my={2} pb={1} color="darkPrimary">
						{name}
					</Title>
				</span>
				<Text width={[1]} style={{ overflow: "auto" }} color="darkPrimary">
					{description}
				</Text>
			</TextContainer>

			<ImageContainer>
				<ProjectImage {...logo} />
				<ProjectTag>
					<Flex
						m={1}
						style={{
							float: "right",
						}}
					>
						{repository && (
							<Box mx={1} fontSize={4}>
								<SocialLink name="Repository" icon="github" url={repository} invert />
							</Box>
						)}
						{homepage && (
							<Box mx={1} fontSize={4}>
								<SocialLink name="Homepage" icon="globe" url={homepage} invert />
							</Box>
						)}
						{/* Code below ignores the dummy links I need before there are any real case studies */}
						{caseStudy && caseStudy !== homepage && (
							<Box mx={1} fontSize={4}>
								<SocialLink name="Case Study" icon="medium" url={caseStudy} invert />
							</Box>
						)}
					</Flex>
					<ImageLabel
						bg="primaryAccent"
						color="lightPrimary"
						position="bottom-right"
						round
					>
						{type}
					</ImageLabel>
					<Hide query="md">
						<ImageLabel bg="muted" color="darkPrimary">
							{publishedDate}
						</ImageLabel>
					</Hide>
				</ProjectTag>
			</ImageContainer>
		</Flex>
	</Card>
);

const CARD_HEIGHT = "200px";
const MEDIA_QUERY_SMALL = "@media (max-width: 400px)";

const Title = styled(Text)`
	font-size: 14px;
	font-weight: 600;
	text-transform: uppercase;
	display: table;
	border-bottom: 5px solid ${({ theme }) => theme.colors.primaryAccent};
	transition: 0.4s;
	position: relative;

	&:after {
		content: "";
		width: 0;
		left: 0;
		bottom: -5px;
		position: absolute;
		background: ${({ theme }) => theme.colors.secondaryAccent};
		height: 5px;
		transition-property: width;
		transition-duration: 0.3s;
		transition-timing-function: ease-out;
	}

	&:focus:after,
	&:hover:after {
		width: 100%;
	}
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 10px;
	width: 100%;
	width: calc(100% - ${CARD_HEIGHT});

	${MEDIA_QUERY_SMALL} {
		width: calc(100% - (${CARD_HEIGHT} / 2));
	}
`;

const ImageContainer = styled.div`
	margin: auto;
	width: ${CARD_HEIGHT};
	height: ${CARD_HEIGHT};
`;

const ProjectImage = styled(Image)`
	width: ${CARD_HEIGHT};
	height: ${CARD_HEIGHT};
	padding: 40px;
	border-radius: 25%;
	margin-top: 0px;

	${MEDIA_QUERY_SMALL} {
		height: calc(${CARD_HEIGHT} / 2);
		width: calc(${CARD_HEIGHT} / 2);
		margin-top: calc(${CARD_HEIGHT} / 4);
		padding: 10px;
	}
`;

const ProjectTag = styled.div`
	position: relative;
	height: ${CARD_HEIGHT};
	top: calc(
		-${CARD_HEIGHT} - 3.5px
	); /*don't know why I have to add 3.5px here ... */

	${MEDIA_QUERY_SMALL} {
		top: calc(-${CARD_HEIGHT} - 3.5px + (${CARD_HEIGHT} / 4));
	}
`;

export default Project;
