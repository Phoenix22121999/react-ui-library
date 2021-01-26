import * as React from "react";
import { LinkWraper } from "../MenuItem/MenuItem.style";
import { Item } from "./SlideBarMenuItem.style";
interface ISlideBarMenuItemProps {
	menuName?: string;
	link?: string;
	leftIcon?: React.ReactNode;
	rightIcon?: React.ReactNode;
	setActiveMenu?: (menu: string) => void;
}

const SlideBarMenuItem: React.FunctionComponent<ISlideBarMenuItemProps> = ({
	children,
	menuName,
	setActiveMenu,
	link,
	leftIcon,
	rightIcon,
}) => {
	return (
		<Item
			className="menu-item"
			onClick={() =>
				menuName && !link && setActiveMenu && setActiveMenu(menuName)
			}
		>
			<span className="icon-button">{leftIcon}</span>
			{link ? <LinkWraper to={link}>{children}</LinkWraper> : children}

			<span className="icon-right">{rightIcon}</span>
		</Item>
	);
};

export default SlideBarMenuItem;
