import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TransitionStatus } from 'react-transition-group/Transition';
import { transform } from 'typescript';

interface MenuProps  {
    state: TransitionStatus,
}


interface Wraper  {
    state: TransitionStatus,
    height?:number|undefined;
}

export const Menu = styled.div<MenuProps>`
    transition: all 0.5s; 
	transform: ${({ state }) => (state === "entered" ? "translateX(0%)" : "translateX(110%)")};
    position: ${({ state }) => (state === "entering"||state === "exiting" ? "absolute" : "relative")};
	width: 100%;
    padding:  0.2rem;

`

export const DropdownWarper = styled.div<Wraper>`
    top:160%;
    min-width: 100%;
    position: absolute;
	overflow: hidden;
    /* padding: 0.5rem 0.2rem; */
    transition: all 0.25s;
    height: ${({height})=>height+"px"};
    background-color: ${p=>p.theme.neumorphism.light.backgroundcolor};
    box-shadow: ${p=>p.theme.neumorphism.light.boxShadow};
    /* box-shadow: 3px 3px 6px #b8b9be; */
    opacity: ${({ state }) => (state === "entered" ? 1 : 0)};
`

export const LinkWraper = styled(Link)`
    padding: 0.5rem;
    color: #000;
`