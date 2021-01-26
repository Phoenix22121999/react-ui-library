import React, { useState, useRef } from "react";
import { Item, LinkWraper ,ItemButton} from "./MenuItem.style";
import { Link } from "react-router-dom";
import { Path } from "../../../../../Contants/Constans";
import { MenuDropdown } from "../MenuDropdown/MenuDropdown";
import { Transition } from "react-transition-group";
import { useOutsideAlerter } from "../../../../../Contants/Function";
interface IMenuItemProps {
	icon?: React.ReactNode;
	link?: string;
	name: string;
	item: Path;
}

export const MenuItem: React.FunctionComponent<IMenuItemProps> = ({
	icon,
	link,
	name,
	item,
}) => {
	const [open, setOpen] = useState(false);
	const [active, setActive] = useState(item.Name);
	const handleClick = () => {
		setOpen(!open);
	};
	const ref = useRef<HTMLLIElement>(null);
	const onClickOutSide = () => {
		setOpen(false);
	};
	useOutsideAlerter(ref, onClickOutSide);

	return (
		<Item ref={ref}>
			<ItemButton>
				<div className="icon-button">{icon}</div>
				<LinkWraper onClick={handleClick} to={link ? link : ""}>
					{name}
				</LinkWraper>
			</ItemButton>

			<Transition in={open} timeout={250} mountOnEnter unmountOnExit>
				{(state) => {
					return (
						<>
							{item.Children && (
								<MenuDropdown
									state={state}
									setOpen={setOpen}
									item={item.Children}
								/>
							)}
						</>
					);
				}}
			</Transition>
		</Item>
	);
};
