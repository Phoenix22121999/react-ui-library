import styled from "styled-components";
export const Button = styled.button`
	cursor: pointer;
	position: relative;
	font-size: 1rem;
	border-color: #d1d9e6;
	transition: all 0.2s ease;
	font-weight: 400;
	border: 0.0625rem solid transparent;
	padding: 0.55rem 0.95rem;
	box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #ffffff;
	outline: none;
	line-height: 1.5;
	border-radius: 0.55rem;
	font-weight:500;
	&:active {
		box-shadow: inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #ffffff;
    }
    
`;
export const Icon = styled.i`
	margin-right: 0.25rem;
	justify-content: center;
	align-items: center;
	display: inline-flex;
`;

export const Text = styled.div`
	display: inline-flex;
	font-weight: 600;
	font-size: 18px;
	justify-content:center;
	align-items:center;
`;

export const Flex = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;

`;
