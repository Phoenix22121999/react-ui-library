import * as React from "react";
import { GiCancel } from "react-icons/gi";
import * as NeumorphismButtonStyles from './NeumorphismButonStyles'
interface INeumorphismButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {}



const NeumorphismButton: React.FC<INeumorphismButtonProps> = ({
	children,
	...props
}: INeumorphismButtonProps) => {
	return (
		<>
			<NeumorphismButtonStyles.Button className={`neumorphism-button`}>
				<NeumorphismButtonStyles.Flex>
					<NeumorphismButtonStyles.Icon>  </NeumorphismButtonStyles.Icon>
					<NeumorphismButtonStyles.Text>{children}</NeumorphismButtonStyles.Text>
				</NeumorphismButtonStyles.Flex>
			</NeumorphismButtonStyles.Button>
		</>
	);
};

export default NeumorphismButton;
