import React from "react";
import { Image, Text } from "rebass/styled-components";
import { Card } from "./Card";
import { Link } from "gatsby";
import { Employee as EmployeeType } from "../types";
import styled from "styled-components";

type Props = EmployeeType;

// TODO: Make cards look better and maintain shape on narrow screens
const Employee = ({
	profilePhoto,
	name,
	role,
	description,
}: Props) => (
	<Card p={0}>
		<Link
			to="/modal"
			state={{
				modal: true,
				description,
			}}
			style={{
				textDecoration: "none",
			}}
		>
			<ImageContainer>
				<EmployeeImage {...profilePhoto} className="js-vhs-filter" />
			</ImageContainer>

			<EmployeeInfo my={2} pb={1} color="darkPrimary">
				<EmployeeName>{name}</EmployeeName>
				<EmployeeRole>{role}</EmployeeRole>
			</EmployeeInfo>
		</Link>
	</Card>
);

const CARD_HEIGHT = "250px";
const MEDIA_QUERY_SMALL = "@media (max-width: 400px)";

const EmployeeInfo = styled(Text)`
	font-weight: 600;
	text-align: center;
	display: table;
	width: calc(90%);
	margin: auto;
	margin-bottom: 10px;

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

const EmployeeName = styled(Text)`
	font-size: 20px;
`;

const EmployeeRole = styled(Text)`
	font-size: 15px;
	color: #A0A0A0;
	margin-top: 5px;
`;

const ImageContainer = styled.div`
	margin: auto;
	width: ${CARD_HEIGHT};

	${MEDIA_QUERY_SMALL} {
		width: calc(${CARD_HEIGHT} / 2);
	}
`;

const EmployeeImage = styled(Image)`
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

export default Employee;
