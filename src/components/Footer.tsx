import React from "react";
import SocialLink from "./SocialLink";
import styled from "styled-components";
import { Box } from "rebass/styled-components";
import { Fade } from "react-awesome-reveal";
import { useSiteQuery } from "../queries/useSiteQuery";

const Footer = () => {
	const { socialLinks } = useSiteQuery();

	return (
		<Box
			p={[2, 3]}
			backgroundColor="darkPrimary"
			id="footer"
			as="footer"
			style={{
				position: "absolute",
				bottom: 0,
				left: 0,
				right: 0,
				width: "fit-content",
				margin: "auto",
			}}
		>
			<FooterContainer>
				<Fade direction="right" triggerOnce cascade damping={0.5}>
					{socialLinks.map((sl) => (
						<Box mx={[2, 3]} fontSize={[4, 5]} key={sl.name}>
							<SocialLink {...sl} />
						</Box>
					))}
				</Fade>
			</FooterContainer>
		</Box>
	);
};

const FooterContainer = styled.div`
	max-width: 1366px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: auto;

	@media (max-width: 400px) {
		flex-direction: column-reverse;

		& > * {
			margin-bottom: 10px;
		}
	}
`;

export default Footer;
