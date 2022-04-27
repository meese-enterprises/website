import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import Section from "../components/Section";
import { CardContainer } from "../components/Card";
import Triangle from "../components/Triangle";
import Employee from "../components/Employee";
import { useEmployeesQuery } from "../queries/useEmployeesQuery";
import { SECTION } from "../utils/constants";

// @ts-ignore
import { VHSify } from "../utils/imageGlitch";

const Employees = () => {
	const employees = useEmployeesQuery();

	// Runs after the render so the DOM elements are available
	useEffect(() => {
		const images = document.querySelectorAll(".js-vhs-filter");
		images.forEach((image) => VHSify(image));
	}, []);

	return (
		<Section.Container id={SECTION.employees} Background={Background}>
			<Section.Header name={SECTION.employees} icon="🧙🏼‍♂️" label="wizard" />

			<CardContainer minWidth="250px">
				<Fade direction="down" cascade damping={0.5} triggerOnce>
					{employees.map((info, index) => (
						<Employee {...info} key={index} />
					))}
				</Fade>
			</CardContainer>

			{/* From https://codepen.io/samdbeckham/pen/XBzQeK */}
			<svg style={{ height: "0px" }}>
				<filter id="r">
					<feColorMatrix
						type="matrix"
						values="1 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 0 "
					/>
				</filter>
				<filter id="g">
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0  0 1 0 0 0  0 0 0 0 0  0 0 0 1 0 "
					/>
				</filter>
				<filter id="b">
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0  0 0 0 0 0  0 0 1 0 0  0 0 0 1 0 "
					/>
				</filter>
			</svg>
		</Section.Container>
	);
};

const Background = () => (
	<>
		<Triangle
			color="lightSecondary"
			height={["80vh", "80vh"]}
			width={["100vw", "100vw"]}
			position="top-right"
		/>

		<Triangle
			color="lightPrimary"
			height={["50vh", "20vh"]}
			width={["50vw", "50vw"]}
			position="top-right"
		/>

		<Triangle
			color="secondaryAccent"
			height={["35vh", "30vh"]}
			width={["50vw", "60vw"]}
			position="bottom-right"
		/>

		<Triangle
			color="lightPrimary"
			height={["0vh", "7.5vh"]}
			width={["0vw", "10vw"]}
			position="bottom-right"
		/>
	</>
);

export default Employees;
