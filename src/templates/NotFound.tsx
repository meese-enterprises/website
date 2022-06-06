import React from 'react';
import { Heading, Box } from 'rebass/styled-components';
import Layout from '../components/Layout';
import Section from '../components/Section';
import Triangle from '../components/Triangle';

// TODO: Get my custom 404 page from the code site
const NotFoundPage = () => (
	<Layout>
		<Section.Container Background={Background}>
			<Box width={[320, 400, 600]} m="auto">
				<Heading color="lightPrimary" fontSize={['8rem', '12rem', '14rem']} as="h1">
					404
				</Heading>
				<Heading color="darkSecondary" fontSize={['4rem', '5rem', '6rem']} as="h2">
					There isn&apos;t anything here
				</Heading>
			</Box>
		</Section.Container>
	</Layout>
);

const Background = () => (
	<>
		<Triangle
			color="lightSecondary"
			height={['35vh', '80vh']}
			width={['95vw', '60vw']}
		/>

		<Triangle
			color="lightPrimary"
			height={['25vh', '35vh']}
			width={['75vw', '60vw']}
			position="bottom-right"
		/>

		<Triangle
			color="lightSecondary"
			height={['10vh', '20vh']}
			width={['50vw', '50vw']}
			position="top-right"
		/>
	</>
);

export default NotFoundPage;
