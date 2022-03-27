import React, { useEffect } from "react";
import { Heading, Flex, Box, Text } from "rebass/styled-components";
import TextLoop from "react-text-loop";
import Section from "../components/Section";
import SocialLink from "../components/SocialLink";
import ScrollIcon from "../components/ScrollIcon";
import ScrambleLetters from "../utils/scramble";
import { useSiteQuery } from "../queries/useSiteQuery";
import { SECTION } from "../utils/constants";
import { getSectionHref } from "../utils/helpers";

const centerHorizontally = { marginRight: "auto", marginLeft: "auto" };

const LandingPage = () => {
	// TODO: Move my Chinese stuff here, as well as company name/type
	const { companyName, socialLinks, deterministic } = useSiteQuery();

	// Runs after the render, so the DOM elements are available
	useEffect(() => {
		new ScrambleLetters();
	}, []);

	return (
		<Section.Container id={SECTION.home}>
			<Text
				textAlign="center"
				id="chineseName"
				className="chineseShadow"
				fontSize={[6, 7]}
			>
				米斯企业有限责任公司
			</Text>

			<Text
				textAlign="center"
				id="companyName"
				className="scramble"
				fontSize={[6, 7]}
			>
				Meese
			</Text>

			<Text
				textAlign="center"
				id="companyType"
				className="scramble"
				fontSize={[6, 7]}
			>
				Enterprises
			</Text>

			<Text
				textAlign="center"
				id="chineseTagline"
				className="chineseShadow"
				fontSize={[6, 7]}
			>
				只說一句話
			</Text>

			<Text
				textAlign="center"
				id="tagline"
				fontSize={[6, 7]}
				mb={[3, 4, 5]}
			>
				Just say the word.
			</Text>

			{/*}
			<Heading
				as="h2"
				color="lightPrimary"
				fontSize={[5, 6]}
				mb={[3, 5]}
				textAlign="center"
				style={centerHorizontally}
			>
				<TextLoop interval={5000}>
					{roles
						.sort(() => (deterministic ? 1 : Math.random() - 0.5))
						.map((text) => (
							<Text width={[300, 500]} key={text}>
								{text}
							</Text>
						))}
				</TextLoop>
			</Heading>

			<Flex alignItems="center" justifyContent="center" flexWrap="wrap">
				{socialLinks.map((sl) => (
					<Box mx={3} fontSize={[5, 6, 6]} key={sl.name}>
						<SocialLink {...sl} />
					</Box>
				))}
			</Flex>
			*/}

			<ScrollIcon href={`#${getSectionHref(SECTION.about)}`} />
		</Section.Container>
	);
};

export default LandingPage;
