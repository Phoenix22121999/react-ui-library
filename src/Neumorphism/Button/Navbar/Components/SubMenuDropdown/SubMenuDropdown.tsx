import React, { Dispatch, SetStateAction } from "react";
import {  Transition } from "react-transition-group";
import { TransitionStatus } from "react-transition-group/Transition";
import { Menu } from "./SubMenuDropdown.style";
import { Path } from "../../../../../Contants/Constans";
import { DropdownItem } from "../MenuDropdownItem/MenuDropdownItem";
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

export const SubMenuDropdown: React.FunctionComponent<IMenuItemProps> = ({
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
							{!(menuName==="main")?<DropdownItem menuName={preMenmu} setActiveMenu={setActiveMenu}>Go Back</DropdownItem>:null}
							{item.map((item) => (
								<DropdownItem menuName={item.Name} link={item.Link} setActiveMenu={setActiveMenu}>{item.Name}</DropdownItem>
							))}
						</Menu>
					);
				}}
			</Transition>
			{item.map((item) => {
				if (item.Children) {
					return (
						<SubMenuDropdown
							onEnter={onEnter}
							preMenmu={menuName}
							activeMenu={activeMenu}
							menuName={item.Name}
							setActiveMenu={setActiveMenu}
							item={item.Children}
						></SubMenuDropdown>
					);
				}
			})}
		</>
	);
};
