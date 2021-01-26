import * as React from "react";
import * as DropdownStyles from "./Dropdown.style";

interface IDropdownProps {
    visible: boolean;
    onClick: (value:any) => void;
    content: React.ReactNode|React.Component
}

export const Dropdown: React.FunctionComponent<IDropdownProps> = ({
	visible,
    children,
    onClick,
    content
}) => {
	return (
		<DropdownStyles.Wraper>
			<DropdownStyles.ChildrenWraper onClick={onClick}>
				{children}
			</DropdownStyles.ChildrenWraper>
            <DropdownStyles.Content visible ={visible} >
                {content}
            </DropdownStyles.Content>
		</DropdownStyles.Wraper>
	);
};


