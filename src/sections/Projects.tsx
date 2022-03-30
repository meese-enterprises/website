import React from "react";
import { Fade } from "react-awesome-reveal";
import Section from "../components/Section";
import { CardContainer } from "../components/Card";
import Triangle from "../components/Triangle";
import Project from "../components/Project";
import { useProjectsQuery } from "../queries/useProjectsQuery";
import { SECTION } from "../utils/constants";

const Projects = () => {
	const projects = useProjectsQuery();

	// TODO: Sort by date
	return (
		<Section.Container id={SECTION.projects} Background={Background}>
			<Section.Header name={SECTION.projects} icon="💻" label="notebook" />

			<CardContainer minWidth="350px">
				<Fade direction="down" cascade damping={0.5} triggerOnce>
					{projects.map((p, i) => (
						<Project {...p} key={i} />
					))}
				</Fade>
			</CardContainer>
		</Section.Container>
	);
};

const Background = () => (
	<>
		<Triangle
			color="muted"
			height={["15vh", "10vh"]}
			width={["100vw", "100vw"]}
			position="top-left"
		/>

		<Triangle
			color="lightSecondary"
			height={["50vh", "40vh"]}
			width={["70vw", "40vw"]}
			position="bottom-left"
		/>

		<Triangle
			color="secondaryAccent"
			height={["40vh", "15vh"]}
			width={["100vw", "100vw"]}
			position="bottom-right"
		/>
	</>
);

export default Projects;
