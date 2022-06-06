import React from "react";
import { Image, Text } from "rebass/styled-components";
import { Card } from "./Card";
import { Link } from "gatsby";
import { Service as ServiceType } from "../types";
import styled from "styled-components";

type Props = ServiceType;

// TODO: Make cards look better and maintain shape on narrow screens
const Service = ({
	name,
	description,
	icon,
}: Props) => (
	<Card p={0}>
		<Link
			to="/modal"
			state={{
				modal: true,
				description,
			}}
		>
			<ImageContainer>
				<ServiceImage {...icon} />
			</ImageContainer>

			<Title my={2} pb={1} color="darkPrimary">
				{name}
			</Title>
		</Link>
	</Card>
);

const CARD_SIZE = "200px";
const MEDIA_QUERY_SMALL = "@media (max-width: 400px)";

const Title = styled(Text)`
	font-size: 14px;
	font-weight: 600;
	text-transform: uppercase;
	text-align: center;
	display: table;
	width: calc(90%);
	margin: 10px auto;

	${MEDIA_QUERY_SMALL} {
		padding-bottom: calc(${CARD_SIZE} / 8);
	}

	/* https://www.steckinsights.com/shorten-length-border-bottom-pure-css/ */
	&:after {
		content: "";
    display: block;
    margin: 0 auto;
    width: 50%;
    padding-top: 10px;
    border-bottom: ${({ theme }) => theme.colors.primaryAccent} 5px solid;
	}
`;

const ImageContainer = styled.div`
	margin: auto;
	width: ${CARD_SIZE};

	${MEDIA_QUERY_SMALL} {
		width: calc(${CARD_SIZE} / 2);
		padding-top: calc(${CARD_SIZE} / 8);
	}
`;

const ServiceImage = styled(Image)`
	width: calc(${CARD_SIZE} - 50px);
	height: calc(${CARD_SIZE} - 50px);
	display: block;
	padding: 20px;
	margin: auto;
	margin-top: 0px;
	filter: grayscale(1);
	pointer-events: none;

	${MEDIA_QUERY_SMALL} {
		height: calc(${CARD_SIZE} / 2);
		width: calc(${CARD_SIZE} / 2);
		padding: 10px;
	}
`;

export default Service;
