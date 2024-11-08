import React from "react";
import Headroom from "react-headroom";
import { Link as RebassLink, Flex, Image } from "rebass/styled-components";
import styled from "styled-components";
import { useHelmetQuery } from "../queries/useHelmetQuery";
import { useSiteQuery } from "../queries/useSiteQuery";
import { SECTION } from "../utils/constants";
import { getSectionHref } from "../utils/helpers";

const Header = () => {
	const { logo } = useHelmetQuery();
	const { companyName } = useSiteQuery();

	return (
		<StyledHeadroom>
			<Flex
				flexWrap="wrap"
				justifyContent="space-between"
				alignItems="center"
				px={3}
			>
				<RebassLink href={`#${getSectionHref(SECTION.home)}`} variant="empty">
					<Flex justifyContent="center">
						<Image
							src={logo.bigIcon.src}
							height={["60px", "80px"]}
							width={["60px", "80px"]}
							alt={`${companyName} Logo`}
							p={2}
							css={{ borderRadius: "20px", cursor: "pointer" }}
						/>
					</Flex>
				</RebassLink>
			</Flex>
		</StyledHeadroom>
	);
};

const StyledHeadroom = styled(Headroom)`
	* {
		transition: background-color 0.1s ease;
	}

	.headroom--pinned {
		background-color: ${({ theme }) => theme.colors.darkPrimary};
	}

	position: absolute;
	width: 100%;
	color: ${({ theme }) => theme.colors.lightPrimary};
`;

export default Header;
