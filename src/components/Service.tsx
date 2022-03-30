import React from "react";
import { Flex, Image, Text } from "rebass/styled-components";
import styled from "styled-components";
import { Service as ServiceType } from "../types";
import { Card } from "./Card";

type Props = ServiceType;

const Service = ({
	name,
	description,
	icon,
}: Props) => (
	<Card p={0}>
		<ImageContainer>
			<ProjectImage {...icon} />
			<Title my={2} pb={1} color="darkPrimary">
				{name}
			</Title>
		</ImageContainer>
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
	width: calc(100% - ${CARD_HEIGHT});
	margin: 10px auto;

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
	width: calc(${CARD_HEIGHT} - 50px);
	height: calc(${CARD_HEIGHT} - 50px);
	display: block;
	padding: 20px;
	margin: auto;
	margin-top: 0px;

	${MEDIA_QUERY_SMALL} {
		height: calc(${CARD_HEIGHT} / 2);
		width: calc(${CARD_HEIGHT} / 2);
		margin-top: calc(${CARD_HEIGHT} / 4);
		padding: 10px;
	}
`;

export default Service;
