import styled from 'styled-components';
import { TransitionStatus } from 'react-transition-group/Transition';


interface Wraper  {
    state: TransitionStatus,
    height?:number|undefined;
}

interface MenuProps  {
    state: TransitionStatus,
}

export const Wraper = styled.div<Wraper>`
    position:relative;
    overflow: hidden;
    transition: height 0.25s;
    height: ${({height})=>height+"px"};
    background-color: ${p=>p.theme.neumorphism.light.backgroundcolor};
    box-shadow: ${p=>p.theme.neumorphism.light.boxShadow};
`

export const Menu = styled.div<MenuProps>`
    transition: all 0.5s; 
	transform: ${({ state }) => (state === "entered" ? "translateX(0%)" : "translateX(110%)")};
    position: ${({ state }) => (state === "entering"||state === "exiting" ? "absolute" : "relative")};
	width: 100%;
    padding:  0.2rem;

`
