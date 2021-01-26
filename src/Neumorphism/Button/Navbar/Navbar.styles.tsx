import styled, { css } from 'styled-components';
import { TransitionStatus } from 'react-transition-group/Transition';

export const Nav= styled.nav`
    position:relative;
    margin-bottom:5px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    height:4rem;
    background-color: ${p=>p.theme.neumorphism.light.backgroundcolor};
    box-shadow: ${({theme})=>theme.neumorphism.light.boxShadow};

`
export const MenuIcon= styled.div`
    
`
export const Icon= styled.i`
    
`
interface MenuProp {
    state?: TransitionStatus
}

export const Menu= styled.ul<MenuProp>`
    position: relative;
    /* top: 5rem; */
    width: 100%;
    flex-wrap: wrap;
    justify-content:center;
    list-style-type:none;
    margin:0;
    transition: transform 0.25s ease;
    ${({state})=>state?css`
        transform: ${state === "entered" ? "translateX(0%)" : "translateX(110%)"};
    `:css`
        display:flex;
        transform: none;
    `}

    background-color: ${p=>p.theme.neumorphism.light.backgroundcolor};
    box-shadow: ${({theme})=>theme.neumorphism.light.boxShadowDeep};
    padding:1rem 0;
    @media only screen and (min-width: ${({theme})=>theme.common.md}) {
        display:flex;
        top:0;
        position: relative;
        width:initial;
        flex-wrap: nowrap;
        padding:0;
        background-color: transparent;
        box-shadow: none;
    }

`

export const Item= styled.li`
    
`
export const Logo= styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
`
export const ToggleIcon = styled.div`
    background-color: ${p=>p.theme.neumorphism.light.backgroundcolor};
    box-shadow: ${({theme})=>theme.neumorphism.light.boxShadow};
    align-items:center;
    width:2rem;
    padding: 0.5rem;
    margin:0 1rem;
    height: 2rem;
    display:inline;
    svg{
        width:100%;
        height:100%;
    }
    &:active{
        box-shadow: ${p=>p.theme.neumorphism.light.boxShadowInset};
    }
    @media only screen and (min-width: ${({theme})=>theme.common.md}) {
        display:none
    }
`  

export const Mobile = styled.div`
    top:5rem;
    position:absolute;
    width:100%;
    display:block;
    @media only screen and (min-width: ${({theme})=>theme.common.md}) {
        display:none
    }
`
export const Desktop = styled.div`
    display:none;
    @media only screen and (min-width: ${({theme})=>theme.common.md}) {
        display:inline
    }
`