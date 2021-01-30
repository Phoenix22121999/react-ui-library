import styled  from "styled-components";
import { Link } from "react-router-dom";
import { TransitionStatus } from "react-transition-group/Transition";

interface MenuProps {
	state: TransitionStatus;
}


export const Menu = styled.div<MenuProps>`
	transition: all 0.5s;
	transform: ${({ state }) =>
		state === "entered" ? "translateX(0%)" : "translateX(110%)"};
    position: ${({ state }) => (state === "entering"||state === "exiting" ? "absolute" : "relative")};

	width: 100%;
`;

export const LinkWraper = styled(Link)`
	padding: 0.5rem;
	color: #000;
`;
