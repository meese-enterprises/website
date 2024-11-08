// External imports
import React from "react";
import { Fade } from "react-awesome-reveal";

// Internal imports
import Section from "../components/Section";
import Service from "../components/Service";
import Triangle from "../components/Triangle";
import { CardContainer } from "../components/Card";
import { SECTION } from "../utils/constants";
import { useServicesQuery } from "../queries/useServicesQuery";

const Services = () => {
	const services = useServicesQuery();

	return (
		<Section.Container id={SECTION.services} Background={Background}>
			<Section.Header name={SECTION.services} icon="✨" label="sparkles" dark />

			<CardContainer minWidth="250px">
				<Fade direction="down" cascade damping={0.5} triggerOnce>
					{services.map((p, i) => (
						<Service {...p} key={i} />
					))}
				</Fade>
			</CardContainer>
		</Section.Container>
	);
};

const Background = () => (
	<>
		<Triangle
			color="secondaryAccent"
			height={["80vh", "70vh"]}
			width={["100vw", "90vw"]}
			position="top-left"
		/>

		<Triangle
			color="lightPrimary"
			height={["35vh", "20vh"]}
			width={["50vw", "40vw"]}
			position="top-left"
		/>

		<Triangle
			color="primaryAccent"
			height={["35vh", "40vh"]}
			width={["75vw", "60vw"]}
			position="bottom-right"
		/>

		<Triangle
			color="muted"
			height={["25vh", "20vh"]}
			width={["100vw", "100vw"]}
			position="bottom-right"
		/>
	</>
);

export default Services;
