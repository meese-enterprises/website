import React, { useEffect } from 'react';
import { Heading, Flex, Box, Text } from 'rebass/styled-components';
import TextLoop from 'react-text-loop';
import Section from '../components/Section';
import SocialLink from '../components/SocialLink';
import ScrollIcon from '../components/ScrollIcon';
import ScrambleLetters from "../scripts/ScrambleLetters";
//import Triangle from '../components/Triangle';
import { useSiteQuery } from '../queries/useSiteQuery';
import { SECTION } from '../utils/constants';
import { getSectionHref } from '../utils/helpers';

const centerHorizontally = { marginRight: 'auto', marginLeft: 'auto' };

const LandingPage = () => {
	// TODO: Move my Chinese stuff here
	const { name, roles, socialLinks, deterministic } = useSiteQuery();

	// Runs after the render, so the DOM elements are available
	useEffect(() => {
		new ScrambleLetters();
	}, []);

	return (
		<Section.Container id={SECTION.home} Background={Background}>
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
				MEESE
			</Text>

			<Text
				textAlign="center"
				id="companyType"
				className="scramble"
				fontSize={[6, 7]}
			>
				ENTERPRISES
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
				color="primary"
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

const Background = () => (
	<>
		{/*
		<Triangle
			color="muted"
			height={['35vh', '80vh']}
			width={['95vw', '60vw']}
		/>

		<Triangle
			color="secondary"
			height={['38vh', '80vh']}
			width={['50vw', '35vw']}
		/>

		<Triangle
			color="primary"
			height={['25vh', '35vh']}
			width={['75vw', '60vw']}
			position="top-right"
		/>

		<Triangle
			color="muted"
			height={['20vh', '20vh']}
			width={['100vw', '100vw']}
			position="bottom-right"
		/>
		*/}
	</>
);

export default LandingPage;
