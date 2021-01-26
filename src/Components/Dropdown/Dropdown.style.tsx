import styled, { css } from "styled-components";

interface ContentProps {
	visible: boolean;
}
export const Menu = styled.div``;

export const Wraper = styled.div``;

export const ChildrenWraper = styled.div``;

export const Item = styled.div``;
export const Content = styled.div<ContentProps>`
	position: absolute;
	transition: all 1s;
	opacity: 0;
    transition: visibility 0s, opacity 0.5s linear;

	${(props) =>
		props.visible &&
		css`
			opacity: 1;
            display: inline;
            animation: scale-display .3s;
        `}
    ${(props) =>
		!props.visible &&
		css`
            display: inline;
            animation: scale-display--reversed .3s;
	        animation-fill-mode:forwards;
        `}
    
	@keyframes scale-display {
		0% {
			opacity: 0;
			transform: scale(0);
			-webkit-transform: scale(0);
		}

		100% {
			opacity: 1;
			transform: scale(1);
			-webkit-transform: scale(1);
		}
	}

	@keyframes scale-display--reversed {
		0% {
			display: inline-flex;
			opacity: 1;
			transform: scale(1);
			-webkit-transform: scale(1);
		}
		99% {
			display: inline-flex;
			opacity: 0;
			transform: scale(0);
			-webkit-transform: scale(0);
		}
		100% {
			display: none;
			opacity: 0;
			transform: scale(0);
			-webkit-transform: scale(0);
		}
	}
`;
