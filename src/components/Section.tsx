import React, { ReactNode } from "react";
import styled from "styled-components";
import { Heading } from "rebass/styled-components";
import { Slide } from "react-awesome-reveal";
import Link from "./Link";
import { SECTION } from "../utils/constants";
import { getSectionHref } from "../utils/helpers";

type ContainerProps = {
	id?: SECTION;
	children: ReactNode;
	Background?: () => JSX.Element;
};

const Container = ({
	id,
	children,
	Background = DefaultBackground,
}: ContainerProps) => (
	<section id={id && getSectionHref(id)} style={{ position: "relative" }}>
		<Background />
		<SectionContainer>{children}</SectionContainer>
	</section>
);

type HeaderProps = {
	name: string;
	icon?: string;
	label?: string;
	styles?: string;
};

const Header = ({ name, icon, label, styles }: HeaderProps) => (
	<Slide direction="left" triggerOnce>
		<StyledHeading color="darkPrimary" mb={4} styles={styles}>
			<Link selected>
				{name}
				{icon && (
					<span role="img" aria-label={label} style={{ marginLeft: "10px" }}>
						{icon}
					</span>
				)}
			</Link>
		</StyledHeading>
	</Slide>
);

const StyledHeading = styled(Heading)<{ styles?: string }>`
	${({ styles }) => styles}
`;

const SectionContainer = styled.div`
	min-height: 100vh;
	min-width: 320px;
	max-width: 1366px;
	display: flex;
	margin: auto;
	flex: 0 1 auto;
	flex-direction: column;
	justify-content: center;
	padding: 5em 3em;
	scroll-behavior: smooth;

	@media (max-width: 400px) {
		padding: 2em 1em;
	}
`;

const DefaultBackground = () => <div />;

export default {
	Container,
	Header,
};
