import React, { useState, useRef, useEffect } from "react";
import { CSSTransition, Transition, TransitionGroup } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import { useOutsideAlerter } from "../../../../../Contants/Function";
import {Menu,DropdownWarper} from "./MenuDropdown.style";
import { Path } from "../../../../../Contants/Constans";
import { DropdownItem } from "../MenuDropdownItem/MenuDropdownItem";
import { SubMenuDropdown } from "../SubMenuDropdown/SubMenuDropdown";
import { Node } from "typescript";
interface IMenuItemProps {
	setOpen?: (value: boolean | ((prevVar: boolean) => boolean)) => void;
	state: TransitionStatus;
	item: Path[];
	
}

export const MenuDropdown: React.FunctionComponent<IMenuItemProps> = ({
	setOpen,
	state,
	item,
}) => {
	const [activeMenu, setActiveMenu] = useState("main");
	const [height, setHeight] = useState<number|undefined>(undefined);
	const dropdownRef = useRef<HTMLDivElement>(null)
	const calcHeight = (element:HTMLElement) =>{
		setHeight(element.offsetHeight)
		console.debug(element.offsetHeight)
	}
	return (
		<DropdownWarper state={state} ref={dropdownRef} height={height}>
			<Transition in={activeMenu === "main"} timeout={500} onEnter={calcHeight} unmountOnExit mountOnEnter>
				{(state) => {
					return (
						<Menu state={state}>
							{item.map((item) => (
								<DropdownItem  menuName={item.Name} link={item.Link}  setActiveMenu={setActiveMenu}>{item.Name}</DropdownItem>
							))}
						</Menu>
					);
				}}
			</Transition>
			{item.map((item) => {
				if (item.Children) {
					return (
						<SubMenuDropdown
							onEnter={calcHeight}
							preMenmu = "main"
							activeMenu={activeMenu}
							menuName={item.Name}
							setActiveMenu={setActiveMenu}
							item={item.Children}
						></SubMenuDropdown>
					);
				}
			})}
		</DropdownWarper>

	);
};
