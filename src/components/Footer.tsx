import React from "react";
import styled from "styled-components";
import { Text, Box, Flex } from "rebass/styled-components";
import { Fade } from "react-awesome-reveal";
import SocialLink from "./SocialLink";
import Link from "./Link";
import { useSiteQuery } from "../queries/useSiteQuery";

const Footer = () => {
	const { companyName, socialLinks } = useSiteQuery();

	return (
		<Box p={[2, 3]} backgroundColor="secondaryAccent" id="footer" as="footer">
			<FooterContainer>
				<Fade direction="left" triggerOnce>
					<Text fontSize={[2, 3]} color="lightPrimary">
						<span>{`© ${companyName} - Powered by `}</span>
						<Link href="https://github.com/meese-enterprises" footer>Open Source</Link>{" "}
						<span role="img" aria-label="heart">
							❤️
						</span>
					</Text>
				</Fade>
				<Flex>
					<Fade direction="right" triggerOnce cascade damping={0.5}>
						{socialLinks.map((sl) => (
							<Box mx={[2, 3]} fontSize={[4, 5]} key={sl.name}>
								<SocialLink {...sl} />
							</Box>
						))}
					</Fade>
				</Flex>
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
