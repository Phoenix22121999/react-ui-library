import React from "react";
import styled from "styled-components";
import NeumorphismButton from "../../Neumorphism/Button/NeumorphismButton";
import { Dropdown } from "../../Components/Dropdown/Dropdown";
import { useState } from "react";
interface IHomeProps {}
const HomeStyled = styled.div`
	width: 100%;
	height:100vh;
	justify-content: center;
	align-items: center;
	display: flex;
`;
const Home: React.FunctionComponent<IHomeProps> = (props) => {
	const [visible, setvisible] = useState(false);
	return (
		<HomeStyled>
			<Dropdown
				content={<Content />}
				visible={visible}
				onClick={() => {
					setvisible(!visible);
				}}
			>
				<NeumorphismButton> test </NeumorphismButton>
			</Dropdown>
		</HomeStyled>
	);
};

const Content: React.FunctionComponent<IHomeProps> = (props) => {
	return (
		<>
			<NeumorphismButton> test </NeumorphismButton>
		</>
	);
};

export default Home;
