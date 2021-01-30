import React, { useState } from "react";
import { ToggleIcon, Nav, Logo, Menu, Mobile, Desktop } from "./Navbar.styles";
import { MenuItem } from "./Components/MenuItem/MenuItem";
import { MenuItems } from "../../../Contants/Constans";
import { FaBars, FaTimes } from "react-icons/fa";
import { Transition } from "react-transition-group";
import SlidebarMenu from "./Components/SlideBarMenu/SlideBarMenu";
interface Props {}

export const Navbar = (Props:Props) => {
	const [toggleNavbar, settoggleNavbar] = useState(false);

	const handleToggle = (): void => {
		settoggleNavbar(!toggleNavbar);
	};

	return (
		<Nav>
			<Logo></Logo>
			<Mobile>
				<Transition in={toggleNavbar} timeout={250} unmountOnExit mountOnEnter>
					{(state) => (
						<SlidebarMenu state={state} item={MenuItems}/>
					)}
				</Transition>
			</Mobile>
			<Desktop>
				<Menu>
					{MenuItems.map((item) => {
						return (
							<MenuItem
								link={item.Link}
								name={item.Name}
								item={item}
							/>
						);
					})}
				</Menu>
			</Desktop>
			<ToggleIcon onClick={handleToggle}>
				{toggleNavbar ? <FaTimes /> : <FaBars />}
			</ToggleIcon>
		</Nav>
	);
};
