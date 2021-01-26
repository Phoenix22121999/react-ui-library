import React, { useState, useRef, Dispatch, SetStateAction } from "react";
import { CSSTransition, Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import { useOutsideAlerter } from "../../../../../Contants/Function";
import { Menu } from "./SlideBarSubMenu.style";
import { Path } from "../../../../../Contants/Constans";
import { DropdownItem } from "../MenuDropdownItem/MenuDropdownItem";
import { StringifyOptions } from "querystring";
import SlideBarMenuItem from "../SlideBarMenuItem/SlideBarMenuItem";
interface IMenuItemProps {
	setOpen?: (value: boolean | ((prevVar: boolean) => boolean)) => void;
	state?: TransitionStatus;
	item: Path[];
	activeMenu: string;
	setActiveMenu: Dispatch<SetStateAction<string>>;
	menuName: string;
	preMenmu:string;
	onEnter:(el:HTMLElement)=>void
}

export const SubMenuSlideBar: React.FunctionComponent<IMenuItemProps> = ({
	setOpen,
	state,
	item,
	setActiveMenu,
	activeMenu,preMenmu,
	menuName,onEnter
}) => {
	return (
		<>
			<Transition in={activeMenu === menuName} timeout={500} onEnter={onEnter} mountOnEnter unmountOnExit> 
				{(state) => {
					return (
						<Menu state={state}>
							{!(menuName==="main")?<SlideBarMenuItem menuName={preMenmu} setActiveMenu={setActiveMenu}>Go Back</SlideBarMenuItem>:null}
							{item.map((item) => (
								<SlideBarMenuItem menuName={item.Name} link={item.Link} setActiveMenu={setActiveMenu}>{item.Name}</SlideBarMenuItem>
							))}
						</Menu>
					);
				}}
			</Transition>
			{item.map((item) => {
				if (item.Children) {
					return (
						<SubMenuSlideBar
							onEnter={onEnter}
							preMenmu={menuName}
							activeMenu={activeMenu}
							menuName={item.Name}
							setActiveMenu={setActiveMenu}
							item={item.Children}
						></SubMenuSlideBar>
					);
				}
			})}
		</>
	);
};
