import React from "react";
import { Menu, Wraper } from "./SlideBarMenu.style";
import Transition, { TransitionStatus } from "react-transition-group/Transition";
import { useState, useRef } from "react";
import { Path } from '../../../../../Contants/Constans';
import SlideBarMenuItem from "../SlideBarMenuItem/SlideBarMenuItem";
import { SubMenuSlideBar } from "../SlideBarSubMenu/SlideBarSubMenu";
interface ISlidebarMenuProps {
	state: TransitionStatus;
	item:Path[]
}

const SlidebarMenu: React.FunctionComponent<ISlidebarMenuProps> = ({
	state,item
}) => {
	const [activeMenu, setActiveMenu] = useState("main");
	const [height, setHeight] = useState<number | undefined>(undefined);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const calcHeight = (element: HTMLElement) => {
		setHeight(element.offsetHeight);
		console.debug(element.offsetHeight);
	};
	return (
		<Wraper state={state} ref={dropdownRef} height={height}>
			<Transition in={activeMenu === "main"} timeout={500} onEnter={calcHeight} unmountOnExit mountOnEnter>
				{(state) => {
					return (
						<Menu state={state}>
							{item.map((item) => (
								<SlideBarMenuItem  menuName={item.Name} link={item.Link}  setActiveMenu={setActiveMenu}>{item.Name}</SlideBarMenuItem>
							))}
						</Menu>
					);
				}}
			</Transition>
			{item.map((item) => { 
				console.debug(item)
				if (item.Children) {
					return (
						<SubMenuSlideBar
							onEnter={calcHeight}
							preMenmu="main"
							activeMenu={activeMenu}
							menuName={item.Name}
							setActiveMenu={setActiveMenu}
							item={item.Children}
						></SubMenuSlideBar>
					);
				} return null
			})}
		</Wraper>
	);
};

export default SlidebarMenu;
