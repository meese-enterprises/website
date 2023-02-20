import styled from "styled-components";
import { Card as CardRebass } from "rebass/styled-components";

type CardContainerProps = {
	minWidth: string;
};

export const CardContainer = styled.div<CardContainerProps>`
	display: grid;
	grid-gap: 30px;

	grid-template-columns: repeat(
		auto-fill,
		minmax(${({ minWidth }) => minWidth}, 1fr)
	);
	justify-items: center;
`;

export const Card = styled(CardRebass).attrs({
	bg: "background",
	boxShadow: 0,
})`
	position: relative;
	background-color: ${({ theme }) => theme.colors.lightPrimary};
	box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
	transition: all 0.25s;
	top: 0;
	height: 100%;
	width: 100%;
	border-radius: 8px;
	min-width: 200px;

	/* Prevents hover jitter effect, credit to https://maximelafarie.com/avoid-css-flickering */
	transform: translate3d(0,0,0);
	-webkit-transform: translate3d(0,0,0);

	&:hover {
		top: -10px;
		box-shadow: 0 12px 16px rgba(0, 0, 0, 0.2);
	}
`;
