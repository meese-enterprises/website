import React, { useEffect } from "react";
import { Text } from "rebass/styled-components";
import Section from "../components/Section";
import ScrollIcon from "../components/ScrollIcon";
import ScrambleLetters from "../utils/scramble";
import { SECTION } from "../utils/constants";
import { getSectionHref } from "../utils/helpers";
import { useLandingPageQuery } from "../queries/useLandingPageQuery";

const LandingPage = () => {
	const {
		chineseCompanyName,
		companyName,
		companyType,
		chineseTagline,
		tagline
	} = useLandingPageQuery();

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
				{chineseCompanyName}
			</Text>

			<Text
				textAlign="center"
				id="companyName"
				className="scramble"
				fontSize={[6, 7]}
			>
				{companyName}
			</Text>

			<Text
				textAlign="center"
				id="companyType"
				className="scramble"
				fontSize={[6, 7]}
			>
				{companyType}
			</Text>

			<Text
				textAlign="center"
				id="chineseTagline"
				className="chineseShadow"
				fontSize={[6, 7]}
			>
				{chineseTagline}
			</Text>

			<Text
				textAlign="center"
				id="tagline"
				fontSize={[6, 7]}
				mb={[3, 4, 5]}
			>
				{tagline}
			</Text>

			<ScrollIcon href={`#${getSectionHref(SECTION.about)}`} />
		</Section.Container>
	);
};

export default LandingPage;
