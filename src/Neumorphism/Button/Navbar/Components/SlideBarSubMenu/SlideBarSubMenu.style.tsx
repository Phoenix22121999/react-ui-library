import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { TransitionStatus } from "react-transition-group/Transition";

interface MenuProps {
	state: TransitionStatus;
}
interface Wraper {
	state: TransitionStatus;
	height: number;
}

export const Menu = styled.div<MenuProps>`
	transition: all 0.5s;
	/* opacity: ${({ state }) => (state === "entered" ? 1 : 0)}; */
	transform: ${({ state }) =>
		state === "entered" ? "translateX(0%)" : "translateX(110%)"};
    position: ${({ state }) => (state === "entering"||state === "exiting" ? "absolute" : "relative")};

	width: 100%;
	padding: 0.2rem;
`;

export const LinkWraper = styled(Link)`
	padding: 0.5rem;
	color: #000;
`;
