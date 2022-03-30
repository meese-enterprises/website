import React from "react";
import ImageLabel from "./ImageLabel";
import { Flex, Image, Text } from "rebass/styled-components";
import styled from "styled-components";
import { Service as ServiceType } from "../types";
import { Card } from "./Card";

type Props = ServiceType;

const Service = ({
	name,
	description,
	type,
	icon,
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
				<ProjectImage {...icon} />
				<ProjectTag>
					<ImageLabel
						bg="primaryAccent"
						color="lightPrimary"
						position="bottom-right"
						round
					>
						{type}
					</ImageLabel>
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
	border-bottom: ${({ theme }) => theme.colors.primaryAccent} 5px solid;
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

	${MEDIA_QUERY_SMALL} {
		width: calc(${CARD_HEIGHT} / 2);
	}
`;

const ProjectImage = styled(Image)`
	width: ${CARD_HEIGHT};
	height: ${CARD_HEIGHT};
	padding: 40px;
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

export default Service;
