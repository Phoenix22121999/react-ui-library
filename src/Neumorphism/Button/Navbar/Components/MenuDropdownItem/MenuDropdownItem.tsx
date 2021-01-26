import * as React from 'react';
import { Link } from 'react-router-dom';
import {Item} from './MenuDropdownItem.style'
import { LinkWraper } from '../MenuItem/MenuItem.style';
interface DropdownItemProps {
    menuName?:string,
    link?:string,
	leftIcon?:React.ReactNode,
    rightIcon?:React.ReactNode
    setActiveMenu?:(menu:string)=>void
}

export const DropdownItem: React.FunctionComponent<DropdownItemProps> = ({children, menuName,setActiveMenu,link,leftIcon,rightIcon}) =>{
    return (
        <Item
            className="menu-item"
            onClick={() => menuName&& !link &&setActiveMenu && setActiveMenu(menuName)}
        >
            <span className="icon-button">{leftIcon}</span>
            {
                link?<LinkWraper to={link}>{children}</LinkWraper>:children
            }

            <span className="icon-right">{rightIcon}</span>
        </Item>
    );
}

